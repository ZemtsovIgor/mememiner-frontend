import React, {FC, useEffect, useState} from 'react';
import {
  Balance,
  ProgressLine,
  Counters,
  CenteredContent,
  MultiTap, HomeContainer
} from "./Home.Styles";
import Clicker from "../../components/Clicker/Clicker";
import {connect} from "react-redux";
import {formatNumber} from "../../common/utils/formatters";
import {closeModal, openModal} from "../../store/app/actions";
import {PickUpCoins, Clue} from "../../components/Modals";
import Header from "../../components/Header";
import {WebSocketContextApi} from "../../types/webSocketTypes";
import useWebSocket from "../../hooks/useWebSocket";
import {USER_TYPE_BY_RANK, USER_TYPES} from "../../types/friends.d";
import {useTranslation} from "react-i18next";
import {Icon} from "../../elements";

interface Props {
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const Home: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const {
    openModal,
    closeModal
  } = props;
  const webSocket: WebSocketContextApi = useWebSocket();
  const {
    wallet: {
      points,
      rank,
      totalPointsHourlyRate,
      rankThreshold,
      totalPointsPerTap,
      refillCoins
    }
  } = webSocket;

  const [pickUpModalShowed, setPickUpModalShowed] = useState<boolean>(false);

  // eslint-disable-next-line
  const handleOpenModal = (payload: any) => {
    if (!openModal) return
    openModal(payload)
  };

  // eslint-disable-next-line
  const modalPickUpCoins = () => (
    <div className="modal-content">
      <div className="modal-pickUpCoins">
        <PickUpCoins title={t('common.refill')} amount={refillCoins || 0}/>
      </div>
    </div>
  );

  const modalClue = () => (
    <div className="modal-content">
      <div className="modal-pickUpCoins">
        <Clue title={t('modals.income.title')} text={t('modals.income.description')} />
      </div>
    </div>
  );

  useEffect(() => {
    if (refillCoins && !pickUpModalShowed) {
      handleOpenModal({
        closeModal: closeModal,
        className: "modal modalPickUpCoins",
        content: modalPickUpCoins
      });
      setPickUpModalShowed(true);
    }
  }, [closeModal, handleOpenModal, modalPickUpCoins, pickUpModalShowed, refillCoins]);

  return (
    <HomeContainer>
      <Header />
      <Balance balancelength={points.toString().length}>
        <div className="balance-img__wrap">
          <img className="balance-img" src="/img/coin.png" alt=""/>
        </div>
        <span className="balance-text">
          {formatNumber(points, 0, 0).replace(/,/g, ' ')}
        </span>
      </Balance>
      <Counters>
        <div className="counters-wrapper">
          <ProgressLine progress={(points / rankThreshold) * 100}
                        pointslength={points.toString().length + rankThreshold.toString().length}>
            <div className="progressLine-container">
              <div className="progressLine-annotation">
                <span
                  className="progressLine-annotation__name">{t(`friends.types.${rank ? USER_TYPE_BY_RANK[rank] : USER_TYPES.SLAVE}`)}</span>
                <div>
                  <span className="progressLine-annotation__name -gray">{t('progress.rank')}</span>
                  <span className="progressLine-annotation__name">{rank}/10</span>
                </div>
              </div>
              <div className="progressLine-wrap">
                <div className="progressLine-line"/>
                <span className="progressLine-caption">
                <div className="progressLine-caption__img_wrap">
                  <img className="progressLine-caption__img" src="/img/coin.png" alt=""/>
                </div>
                <span className="progressLine-caption__text">
                  {formatNumber(points, 0, 0).replace(/,/g, ' ')}/{formatNumber(rankThreshold, 0, 0).replace(/,/g, ' ')}
                </span>
              </span>
              </div>
            </div>
          </ProgressLine>
          <div className="counters-item">
            <MultiTap>
              <div className="multitap-icon__wrap">
                <img className="multitap-icon" src="/img/multitap.png" alt="mem"/>
              </div>
              <div className="multitap-value">
                <div className="multitap-value__img_wrap">
                  <img className="multitap-value__img" src="/img/coin.png" alt=""/>
                </div>
                <span className="multitap-value__text">+{totalPointsPerTap}</span>
              </div>
            </MultiTap>
          </div>
          <div
            className="counters-item -big"
            onClick={() => {
              handleOpenModal({
                  closeModal: closeModal,
                  className: `modal modalClue`,
                  content: modalClue,
                  hasCloseBtn: true,
                }
              )
            }}
          >
            <span className="counters-item__name -purple">{t('progress.profit_per_hour')}</span>
            <div className="counters-item__value">
              <div className="counters-item__img_wrap">
                <img className="counters-item__img" src="/img/coin.png" alt=""/>
              </div>
              <span className="counters-item__value_text">+{totalPointsHourlyRate}</span>
              <Icon className="counters-item__info" name="info" size="12"/>
            </div>
          </div>
        </div>
      </Counters>
      <CenteredContent>
        <Clicker/>
      </CenteredContent>
      {/*<BottomContent>*/}
      {/*  <Energy>*/}
      {/*    <div className="energy-count">*/}
      {/*      <div className="energy-count__icon"/>*/}
      {/*      <span className="energy-count__text">{availableEnergy}/{totalEnergy}</span>*/}
      {/*    </div>*/}
      {/*    /!*<button className="energy-refill" onClick={() => clickerRefill()}>*!/*/}
      {/*    /!*  <Icon name="rocket" size="30"/>*!/*/}
      {/*    /!*</button>*!/*/}
      {/*  </Energy>*/}
      {/*  <Lootbox>*/}
      {/*    <div className="lootbox-btn">*/}
      {/*    <div className="lootbox-icon"/>*/}
      {/*    </div>*/}
      {/*  </Lootbox>*/}
      {/*</BottomContent>*/}
    </HomeContainer>
  );
};

export default connect(null, {openModal, closeModal})(Home);
