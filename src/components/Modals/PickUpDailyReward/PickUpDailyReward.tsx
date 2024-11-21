import React from "react";
import {Button} from "../../../elements";
import {PickUpCoinsStyle} from "./PickUpDailyReward.Styles";
import {connect} from "react-redux";
import {closeModal} from "../../../store/app/actions";
import {DAILY_BONUS, REWARD_TYPES} from "../../../types/tasks.d";
import {WebSocketContextApi} from "../../../types/webSocketTypes";
import useWebSocket from "../../../hooks/useWebSocket";
import {useTranslation} from "react-i18next";

interface Props {
  closeModal: () => void;
  reward: DAILY_BONUS;
}

const PickUpDailyReward: React.FC<Props> = (props: Props) => {
  const {closeModal, reward} = props;
  const { t } = useTranslation();
  const webSocket: WebSocketContextApi = useWebSocket();
  const {claimDailyBonus} = webSocket;

  const getReward = () => {
    if (!claimDailyBonus) return;
    claimDailyBonus();
    if (!closeModal) return;
    closeModal();
  };

  return (
    <PickUpCoinsStyle>
      <span className="pickUpCoins-title">{t('tasks.modals.daily_reward.day')} {reward.day}</span>
      <div className="pickUpCoins-icon">
        {
          (reward.type === REWARD_TYPES.COINS) ? (
            <>
              <img alt="" src="/img/coin.png"/>
              <span className="pickUpCoins-amount">{reward.amount}</span>
            </>
          ) : (
            <>
              {/*// <img*/}
              {/*//   className="dailyReward-reward__img"*/}
              {/*//   src={`data:image/svg+xml;base64,${reward.icon}`}*/}
              {/*//   alt=""*/}
              {/*// />*/}
            </>
          )
        }
      </div>
      <div className="pickUpCoins-actions">
        <Button
          className="pickUpCoins-btn"
          type="button"
          onClick={() => {
            getReward();
          }}
        >
          {t('tasks.btns.take_my_coins')}
        </Button>
      </div>
    </PickUpCoinsStyle>
  );
};

export default connect(null, {closeModal})(PickUpDailyReward);
