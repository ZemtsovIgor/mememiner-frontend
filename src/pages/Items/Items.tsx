import React, {FC, useMemo, useState} from 'react';
import {useTranslation} from "react-i18next";
import {ITEM_TYPE, ITEMS_SORT, ITEMS_TYPES, RARITY_TYPES} from "../../types/items.d";
import {sortList, typesList} from "../../const/mocks.constants";
import {ItemImg, ItemsContainer, ItemsControl, ItemsWrap} from "./Items.Styles";
import {Select} from "../../elements";
import { ReactComponent as DotsSVG } from "../../assets/images/dots.svg";
import {WebSocketContextApi} from "../../types/webSocketTypes";
import useWebSocket from "../../hooks/useWebSocket";
import {inventoryIcons} from "../../const/inventory.constants";
import {AppStateType} from "../../store";
import {connect} from "react-redux";
import {closeModal, openModal} from "../../store/app/actions";
import {InventoryCard} from "../../components/Modals";

interface Props {
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const Items: FC<Props> = (props: Props) => {
  const {openModal, closeModal} = props;
  const { t } = useTranslation();
  const webSocket: WebSocketContextApi = useWebSocket();
  const {wallet, inventory, buyInventoryItem, setInventoryItem} = webSocket;
  const {
    points,
    item1Collection,
    item2Collection,
    item3Collection,
    item4Collection,
    item5Collection,
    item1Id,
    item2Id,
    item3Id,
    item4Id,
    item5Id
  } = wallet;

  const [filterParams, setFilterParams] = useState<{
    type: ITEMS_TYPES,
    sort: ITEMS_SORT,
    filter: ITEMS_TYPES | ITEMS_SORT,
  }>({
    type: ITEMS_TYPES.ALL,
    sort: ITEMS_SORT.RARITY,
    filter: ITEMS_SORT.RARITY,
  });

  const [selectedItems, setSelectedItems] = useState<{
    headdress: string,
    outerwear: string,
    pants: string,
    shoes: string,
    weapon: string
  }>({
    headdress: `${item1Collection}_${item1Id}`,
    outerwear: `${item2Collection}_${item2Id}`,
    pants: `${item3Collection}_${item3Id}`,
    shoes: `${item4Collection}_${item4Id}`,
    weapon: `${item5Collection}_${item5Id}`,
  });

  const setItemsSort = (value: string, type?: string) => {
    const typedValue: ITEMS_SORT = ITEMS_SORT[value.toUpperCase() as keyof typeof ITEMS_SORT];
    const typedValueType: ITEMS_TYPES = ITEMS_TYPES[value.toUpperCase() as keyof typeof ITEMS_TYPES];
    const isSort: boolean = type === 'sort';

    setFilterParams(prev => ({
      ...prev,
      sort: isSort ? typedValue : prev.sort,
      type: isSort ? prev.type : typedValueType === prev.type ? ITEMS_TYPES.ALL : typedValueType,
      filter: isSort ? typedValue : typedValueType
    }));
  };

  const selectItem = (item: ITEM_TYPE) => {
    console.log('selectItem', item);
    closeModal();
    if (item.icon) {
      // @ts-ignore
      if (selectedItems[item.type] === `${item.collectionId}_${item.id}`) return;
      if (!item.bought && (item.price || 0) > points) return;


      setSelectedItems(prev => ({
        ...prev,
        [item.type]: `${item.collectionId}_${item.id}`,
      }));

      if (item.bought) {
        setInventoryItem((item.rarity === RARITY_TYPES.BASE) ? item.collectionId?.replace('Base', 'Empty') || '' : item.collectionId || '', item.id || 0);
      } else {
        buyInventoryItem(item.collectionId || '', item.id || 0);
      }
    }
  };

  const visibilityList: ITEM_TYPE[] = useMemo(
    () => {
      const result = inventory.list.filter((item: ITEM_TYPE) => {
          return !(filterParams.type !== ITEMS_TYPES.ALL && filterParams.type !== item.type);
        }
      );

      if (result.length % 4 !== 0) {
        const iterationsCount: number = Number((result.length / 4).toFixed(0)) * 4 + 4 - result.length;

        for (let i = iterationsCount; i > 0; i--) {
          result.push({
            icon: '',
            image: '',
            type: ITEMS_TYPES.ALL,
            rarity: RARITY_TYPES.BASE,
          })
        }
      }

      return result
    },
    [filterParams.type, inventory.loaded, inventory.list]
  );

  // eslint-disable-next-line
  const handleOpenModal = (payload: any) => {
    if (!openModal) return
    openModal(payload);
  };

  const handleCloseModal = () => {
    if (!closeModal) return
    closeModal();
  };

  const modalInventoryCard = (item: ITEM_TYPE) => (
    <div className="modal-content">
      <div className="modal-inventoryCard">
        <InventoryCard item={item} select={selectItem}/>
      </div>
    </div>
  );

  return (
    <ItemsContainer>
      <ItemsControl>
        <div className="items-control">
          <Select
            value={filterParams.filter}
            name="filter"
            placeholder={<>{t('common.sort')} <DotsSVG /></>}
            disableIconComponent={true}
            staticText={true}
            list={[...sortList.map((s) => {
              return {val: s, type: 'sort'}
            }), ...typesList.map((t) => {
              return {val: t, type: 'type'}
            })].map((s: {val: string; type: string}) => {
              return {
                value: s.val,
                type: s.type,
                text: t(`sort.${s.val}`)
              }
            })}
            fullWidth
            onSelect={setItemsSort}
            values={filterParams}
          />
        </div>
      </ItemsControl>

      <ItemsWrap>
        <div className="items-wrap">
          {
            visibilityList.map((item: ITEM_TYPE, index: number) => (
              <div
                key={`item-${index + 1}`}
                // @ts-ignore
                className={`item -${item.rarity} ${selectedItems[item.type] === `${item.collectionId}_${item.id}` ? '-selected' : ''} ${item.icon ? '-pointed' : ''}`}
                onClick={() => {
                  handleOpenModal({
                    closeModal: handleCloseModal,
                    className: `modal modalInventoryCard -${item.rarity}`,
                    content: modalInventoryCard,
                    contentParams: item,
                    hasCloseBtn: true,
                  }
                  )
                }}
              >
                <div className="item-container">
                  {
                    // @ts-ignore
                    item.icon ? <ItemImg icon={inventoryIcons[item.icon]}/> : null
                  }
                </div>
                <div className="item-price__wrap">
                  {
                    item.bought ? null : (
                      <span className="item-price">{item.price}</span>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </ItemsWrap>
    </ItemsContainer>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {wallet} = state;
  return {
    wallet,
  };
};
export default connect(mapStateToProps, {openModal, closeModal})(Items);
