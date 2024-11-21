import React from "react";
import {Button} from "../../../elements";
import {ImproveCardStyle} from "./ImproveCard.Styles"
import {connect} from "react-redux";
import {AppStateType} from "../../../store";
import {getPickUpCoins} from "../../../store/wallet/actions";
import {closeModal} from "../../../store/app/actions";
import {CARD} from "../../../types/cards.d";
import {nFormatter} from "../../../common/utils/formatters";
import {WebSocketContextApi} from "../../../types/webSocketTypes";
import useWebSocket from "../../../hooks/useWebSocket";
import {useTranslation} from "react-i18next";

interface Props {
  closeModal: () => void;
  card: CARD;
}

const ImproveCard: React.FC<Props> = (props: Props) => {
  const {closeModal, card} = props;
  const { t } = useTranslation();
  const webSocket: WebSocketContextApi = useWebSocket();
  const {
    buyInventoryItem,
    wallet: {
      points
    }
  } = webSocket;

  const buyCard = (item: CARD) => {
    console.log('item', item);
    if (item.price > points) return;
    buyInventoryItem(item.id, item.nextLevel);
    closeModal();
  }

  return (
    <ImproveCardStyle>
      <span className="improveCard-title">{t(`cards.${card.name}`)}</span>
      <div className="improveCard-img__wrap">
        <img
          alt=""
          className="improveCard-img"
          src={card.image}
        />
      </div>
      <span className="improveCard-description">{t(`cards.${card.description}`)}</span>
      <div className="improveCard-profit">
        <span className="improveCard-profit__title">{t('progress.profit_per_hour')}</span>
        <div className="improveCard-profit__value">
          <div className="improveCard-profit__icon">
            <img alt="" src="/img/coin.png"/>
          </div>
          +{nFormatter(card.nextPointsHourlyRate || 0, 1, 0)}
        </div>
      </div>
      {
        ((card.price || 0) > points) ? (
          <span className="improveCard-error">{t('common.insufficient_balance')}</span>
        ) : null
      }
      <div className="improveCard-actions">
        {
          card.bought ? (
            <Button
              className="improveCard-btn"
              type="button"
              onClick={() => {
                buyCard(card);
              }}
              disabled={(card.price || 0) > points}
            >
              {t('common.improve')}
            </Button>
          ) : (
            <Button
              className="improveCard-btn"
              type="button"
              onClick={() => {
                buyCard(card);
              }}
              disabled={(card.price || 0) > points}
            >
              {t('common.buy')}
            </Button>
          )
        }

      </div>
    </ImproveCardStyle>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {app} = state;
  return {
    app,
  };
};

export default connect(mapStateToProps, {getPickUpCoins, closeModal})(ImproveCard);
