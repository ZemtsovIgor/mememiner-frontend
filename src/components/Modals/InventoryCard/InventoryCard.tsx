import React from "react";
import {Button} from "../../../elements";
import {InventoryCardStyle} from "./InventoryCard.Styles"
import {connect} from "react-redux";
import {AppStateType} from "../../../store";
import {getPickUpCoins} from "../../../store/wallet/actions";
import {closeModal} from "../../../store/app/actions";
import {nFormatter} from "../../../common/utils/formatters";
import {WebSocketContextApi} from "../../../types/webSocketTypes";
import useWebSocket from "../../../hooks/useWebSocket";
import {useTranslation} from "react-i18next";
import {ITEM_TYPE} from "../../../types/items.d";
import {ItemImg} from "../../../pages/Items/Items.Styles";
import {inventoryIcons} from "../../../const/inventory.constants";
import {MultiTap} from "../../../pages/Home/Home.Styles";
import {inventoryData} from "../../../elements/Inventory/Inventory";
import { ReactComponent as CoinSVG } from "../../../assets/images/coin.svg";

interface Props {
  closeModal: () => void;
  item: ITEM_TYPE;
  select: (item: ITEM_TYPE) => void;
}

const InventoryCard: React.FC<Props> = (props: Props) => {
  const {item, select} = props;
  const { t } = useTranslation();
  const webSocket: WebSocketContextApi = useWebSocket();
  const {
    wallet: {
      points
    }
  } = webSocket;

  const selectInventory = (item: ITEM_TYPE) => {
    if (!item.bought && ((item.price || 0) > points)) return;
    select(item);
  }

  return (
    <InventoryCardStyle>
      <span className="inventoryCard-title">{t(`inventory.${inventoryData(item.icon).name}`)}</span>
      <span className="inventoryCard-description">{t(`inventory.${inventoryData(item.icon).description}`)}</span>

      <div className="inventoryCard-img__wrap">
        {
          // @ts-ignore
          item.icon ? <ItemImg icon={inventoryIcons[item.icon]}/> : null
        }
      </div>
      <div className="inventoryCard-profits">
        <div className="inventoryCard-profit">
          <span className="inventoryCard-profit__title">{t('progress.profit_per_hour')}</span>
          <div className="inventoryCard-profit__value">
            <div className="inventoryCard-profit__icon">
              <img alt="" src="/img/coin.png"/>
            </div>
            +{nFormatter(item.pointsHourlyRate || 0, 1, 0)}
          </div>
        </div>
        <div className="inventoryCard-profit">
          <MultiTap>
            <div className="multitap-icon__wrap">
              <img className="multitap-icon" src="/img/multitap.png" alt="mem"/>
            </div>
            <div className="multitap-value">
              <div className="multitap-value__img_wrap">
                <img className="multitap-value__img" src="/img/coin.png" alt=""/>
              </div>
              <span className="multitap-value__text">+{item.tapBonus}</span>
            </div>
          </MultiTap>
        </div>
        <div className="inventoryCard-profit">
          <div className="inventoryCard-profit-energy-count">
            <div className="inventoryCard-profit-energy-count__icon"/>
            <span className="inventoryCard-profit-energy-count__text">+{item.energyBonus}</span>
          </div>
        </div>
      </div>
      {
        ((item.price || 0) > points) ? (
          <span className="inventoryCard-error">{t('common.insufficient_balance')}</span>
        ) : null
      }
      <div className="inventoryCard-actions">
        {
          item.bought ? (
            <Button
              className="inventoryCard-btn"
              type="button"
              onClick={() => {
                selectInventory(item);
              }}
            >
              {t('common.put_on')}
            </Button>
          ) : (
            <Button
              className="inventoryCard-btn -icon"
              type="button"
              onClick={() => {
                selectInventory(item);
              }}
              disabled={(item.price || 0) > points}
            >
              <span className="inventoryCard-btn__title">{t('common.buy')}</span>
              <div className="inventoryCard-btn__value">
                <div className="inventoryCard-btn__icon">
                  <CoinSVG/>
                </div>
                {item.price}
              </div>
            </Button>
          )
        }

      </div>
    </InventoryCardStyle>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {app} = state;
  return {
    app,
  };
};

export default connect(mapStateToProps, {getPickUpCoins, closeModal})(InventoryCard);
