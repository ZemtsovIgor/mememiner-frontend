import React, {FC, useEffect, useMemo, useState} from 'react';
import {
  Balance,
  Counters, CardTypesControl, CardsWrap, UpgradeContainer,
} from "./Upgrade.Styles";
import {AppStateType} from "../../store";
import {connect} from "react-redux";
import {formatNumber, nFormatter} from "../../common/utils/formatters";
import {closeModal, openModal} from "../../store/app/actions";
import {ImproveCard} from "../../components/Modals";
import { ReactComponent as CoinSVG } from "../../assets/images/coin.svg";
import { ReactComponent as InfoSVG } from "../../assets/images/info.svg";
import {CARD, CARD_TYPES} from "../../types/cards.d";
import {cardTypesList} from "../../const/mocks.constants";
import {useTranslation} from "react-i18next";
import {WebSocketContextApi} from "../../types/webSocketTypes";
import useWebSocket from "../../hooks/useWebSocket";
import {cardsImages} from "../../const/cards.constants";

interface Props {
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const Upgrade: FC<Props> = (props: Props) => {
  const {
    openModal,
    closeModal
  } = props;
  const { t } = useTranslation();
  const webSocket: WebSocketContextApi = useWebSocket();
  const {
    wallet: {
      points,
      totalPointsHourlyRate,
      rankThreshold,
      totalPointsPerTap
    },
    cards
  } = webSocket;

  const [filterParams, setFilterParams] = useState({
    cardType: CARD_TYPES.BUILDING,
  });

  useEffect(() => {
    console.log('useEffect cards loaded', cards);
  }, [cards.loaded]);

  useEffect(() => {
    console.log('useEffect cards', cards);
  }, [cards]);

  const setCardType = (value: CARD_TYPES) => {
    setFilterParams(prev => ({
      ...prev,
      cardType: value
    }))
  };

  const visibilityCards: CARD[] = useMemo(
    () => {
      console.log('visibilityCards', cards);
      const result: CARD[] = cards.list.filter((card: CARD) => {
          return filterParams.cardType === card.type;
        }
      ).map((card: CARD) => {
        // @ts-ignore
        const cardData: any = cardsImages[card.image];
        if (cardData) {
          card.image = cardData.image;
          card.name = cardData.name;
          card.description = cardData.description;
        }
        return card;
      });

      return result
    },
    [filterParams.cardType, cards.loaded, cards.list]
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

  const modalImproveCard = (card: CARD) => (
    <div className="modal-content">
      <div className="modal-improveCard">
        <ImproveCard card={card}/>
      </div>
    </div>
  );

  return (
    <UpgradeContainer>
      <Counters>
        <div className="counters-wrapper">
          <div className="counters-item">
            <span className="counters-item__name">{t('progress.profit_per_tap')}</span>
            <div className="counters-item__value">
              <div className="counters-item__icon">
                <CoinSVG />
              </div>
              <span className="counters-item__value_text">+{totalPointsPerTap}</span>
            </div>
          </div>
          <div className="counters-item">
            <span className="counters-item__name -purple">{t('progress.coins_to_rank')}</span>
            <div className="counters-item__value -text">
              <span className="counters-item__value_text">{formatNumber(rankThreshold - points, 0, 0).replace(/,/g, ' ')}</span>
            </div>
          </div>
          <div className="counters-item">
            <span className="counters-item__name -green">{t('progress.profit_per_hour')}</span>
            <div className="counters-item__value">
              <div className="counters-item__icon">
                <CoinSVG />
              </div>
              <span className="counters-item__value_text">+{totalPointsHourlyRate}</span>
              <div className="counters-item__info">
                <InfoSVG />
              </div>
            </div>
          </div>
        </div>
      </Counters>
      <Balance>
        <div className="balance-icon">
          <CoinSVG />
        </div>
        <span className="balance-text">{formatNumber(points, 0, 0).replace(/,/g, ' ')}</span>
      </Balance>
      <CardTypesControl>
        <div className="cards-control">
          <div className="cards-control__types">
            {
              cardTypesList.map((cardType: CARD_TYPES) => (
                <button
                  key={`btn-card-control-${cardType}`}
                  onClick={() => setCardType(cardType)}
                  className={`cards-control__btn ${filterParams.cardType === cardType ? '-active' : ''}`}
                  type="button"
                  tabIndex={-1}
                >
                  {t(`cards.types.${cardType}`)}
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
              onClick={() => card.level >= card.nextLevel ? () => {
                return false;
              } : handleOpenModal({
                closeModal: handleCloseModal,
                className: "modal modalImproveCard",
                content: modalImproveCard,
                contentParams: card
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
                  <span className="card-info__title">{t(`cards.${card.name}`)}</span>
                  <span className="card-info__level">{t('progress.level')} {card.nextLevel}</span>
                  <div className="card-info__profit">
                    <span className="card-info__profit_title">{t('progress.profit_per_hour')}</span>
                    <div className="card-info__profit_value">
                      <div className="card-info__profit__icon">
                        <CoinSVG />
                      </div>
                      +{nFormatter(card.nextPointsHourlyRate || 0, 1, 0)}
                    </div>
                  </div>
                </div>
              </div>
              <div className={`card-btn ${card.level >= card.nextLevel ? '-inactive' : ''}`}>

                {
                  card.level >= card.nextLevel ? 'max level' : (
                    <>
                      <div className="card-btn__icon">
                        <CoinSVG/>
                      </div>
                      {nFormatter(card.price, 2, 100000)}
                    </>
                  )
                }
              </div>
            </div>
          ))
        }
      </CardsWrap>
    </UpgradeContainer>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {wallet} = state;
  return {
    wallet,
  };
};
export default connect(mapStateToProps, {openModal, closeModal})(Upgrade);
