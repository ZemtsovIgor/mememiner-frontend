import React, {FC, useEffect, useMemo, useState} from 'react';
import {Icon} from "../../elements";
import {
  Balance,
  Counters, CardTypesControl, CardsWrap,
} from "./Upgrade.Styles";
import {AppStateType} from "../../store";
import {connect} from "react-redux";
import {formatNumber} from "../../common/utils/formatters";
import {WalletReducerState} from "../../store/wallet/reducers";
import {closeModal, openModal} from "../../store/app/actions";
import {PickUpCoins} from "../../components/Modals";
import { ReactComponent as CoinSVG } from "../../assets/images/coin.svg";
import {CARD, CARD_TYPES} from "../../types/cards.d";
import {cardTypesList, cardsMock} from "../../const/mocks.constants";

interface Props {
  wallet: WalletReducerState;
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const Upgrade: FC<Props> = (props: Props) => {
  const {
    wallet: { score, pickupAmount },
    openModal,
    closeModal
  } = props;

  const [filterParams, setFilterParams] = useState({
    cardType: CARD_TYPES.BUILDING,
  })

  const [pickUpModalShowed, setPickUpModalShowed] = useState<boolean>(false);

  const setCardType = (value: CARD_TYPES) => {
    setFilterParams(prev => ({
      ...prev,
      cardType: value
    }))
  };

  const visibilityCards: CARD[] = useMemo(
    () => {
      const result: CARD[] = cardsMock.filter((item: CARD) => {
          return filterParams.cardType !== item.type;
        }
      );

      return result
    },
    [filterParams.cardType]
  );

  // eslint-disable-next-line
  const handleOpenModal = (payload: any) => {
    if (!openModal) return
    openModal(payload)
  };

  // eslint-disable-next-line
  const modalPickUpCoins = () => (
    <div className="modal-content">
      <div className="modal-pickUpCoins">
        <PickUpCoins title="Пока вас не было, вы заработали" amount={pickupAmount}/>
      </div>
    </div>
  );

  useEffect(() => {
    if (pickupAmount && !pickUpModalShowed) {
      handleOpenModal({
        closeModal: closeModal,
        className: "modal modalPickUpCoins",
        content: modalPickUpCoins
      });
      setPickUpModalShowed(true);
    }
  }, [closeModal, handleOpenModal, modalPickUpCoins, pickUpModalShowed, pickupAmount]);

  return (
    <>
      <Counters>
        <div className="counters-wrapper">
          <div className="counters-item">
            <span className="counters-item__name">Прибыль за тап</span>
            <div className="counters-item__value">
              <div className="counters-item__icon">
                <CoinSVG />
              </div>
              <span className="counters-item__value_text">+3</span>
            </div>
          </div>
          <div className="counters-item">
            <span className="counters-item__name -purple">Монет до ранга</span>
            <div className="counters-item__value">
              <span className="counters-item__value_text">{formatNumber(100000 - score, 0, 0).replace(/,/g, ' ')}</span>
            </div>
          </div>
          <div className="counters-item">
            <span className="counters-item__name -green">Прибыль в час</span>
            <div className="counters-item__value">
              <div className="counters-item__icon">
                <CoinSVG />
              </div>
              <span className="counters-item__value_text">+1234</span>
              <Icon className="counters-item__info" name="info" size="12"/>
            </div>
          </div>
        </div>
      </Counters>
      <Balance>
        <div className="balance-icon">
          <CoinSVG />
        </div>
        <span className="balance-text">{formatNumber(score, 0, 0).replace(/,/g, ' ')}</span>
      </Balance>
      <CardTypesControl>
        <div className="cards-control">
          <div className="cards-control__types">
            {
              cardTypesList.map((cardType: CARD_TYPES) => (
                <button
                  key={`btn-item-control-${cardType}`}
                  onClick={() => setCardType(cardType)}
                  className={`items-control__btn ${filterParams.cardType === cardType ? '-active' : ''}`}
                  type="button"
                  tabIndex={-1}
                >
                  {cardType}
                </button>
              ))
            }
          </div>
        </div>
      </CardTypesControl>
      <CardsWrap>
        {
          visibilityCards.map((card: CARD, index: number) => (
            <div
              key={`card-${index + 1}`}
              className={`card`}
              onClick={() => handleOpenModal({
                closeModal: closeModal,
                className: "modal modalPickUpCoins",
                content: modalPickUpCoins
              })}
            >
              <div className="card-info">
                <div className="card-info__avatar">
                  <img
                    alt=""
                    className="card-info__avatar_img"
                    src={card.image}
                  />
                </div>
                <div className="card-info__rows">
                  <span className="card-info__title">{card.name}</span>
                  <span className="card-info__level">Уровень {card.level}</span>
                  <div className="card-info__profit">{card.name}</div>
                </div>
              </div>
              <div className="card-btn">
                <CoinSVG />
                <span className="card-btn__text">{card.price}</span>
              </div>
            </div>
          ))
        }
      </CardsWrap>
    </>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {wallet} = state;
  return {
    wallet,
  };
};
export default connect(mapStateToProps, {openModal, closeModal})(Upgrade);