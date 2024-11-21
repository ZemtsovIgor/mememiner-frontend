import React, {FC, useEffect} from 'react';
import {Button, Icon} from "../../elements";
import {
  TasksWrap,
} from "./Tasks.Styles";
import {formatNumber} from "../../common/utils/formatters";
import {TASK} from "../../types/tasks.d";
import {useTranslation} from "react-i18next";
import {DailyReward} from "../../components/Modals";
import {connect} from "react-redux";
import {closeModal, openModal} from "../../store/app/actions";
import {WebSocketContextApi} from "../../types/webSocketTypes";
import useWebSocket from "../../hooks/useWebSocket";
import { Link } from 'react-router-dom';
import {LOADING_TYPES} from "../../types/app.d";
interface Props {
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const Tasks: FC<Props> = (props: Props) => {
  const {
    openModal,
    closeModal
  } = props;
  const { t } = useTranslation();
  const webSocket: WebSocketContextApi = useWebSocket();
  const {tasks, dailyBonuses, getDailyBonuses} = webSocket;

  useEffect(() => {
    if (dailyBonuses.loaded === LOADING_TYPES.NOT_LOADED) {
      getDailyBonuses();
    }
    console.log('dailyBonuses', dailyBonuses);
  }, [dailyBonuses.loaded]);

  const handleOpenModal = (payload: any) => {
    if (!openModal) return
    openModal(payload);
  };

  const handleCloseModal = () => {
    if (!closeModal) return
    closeModal();
  };

  const modalDailyReward = () => (
    <div className="modal-content">
      <div className="modal-improveCard">
        <DailyReward />
      </div>
    </div>
  );

  return (
    <TasksWrap>
      <div className="tasks-wrapper">
        <div className="tasks-title__wrap">
          <span className="tasks-title">{t('tasks.title')}</span>
        </div>
        <div className="tasks-info">
          <Button
            className="tasks-info__btn"
            onClick={() => handleOpenModal({
              closeModal: handleCloseModal,
              className: "modal modalImproveCard",
              content: modalDailyReward,
            })}
            disabled={!dailyBonuses.bonuses.length}
          >
            <div className="tasks-info__btn_icon">
              <img className="tasks-info__btn_icon_img" src="/img/coin.png" alt=""/>
            </div>
            <span className="tasks-info__btn_title">{t('tasks.btns.daily_reward')}</span>
          </Button>
        </div>
        <div className="tasks-list">
          <div className="tasks-list__description">
            <span className="tasks-list__description_title">{t('tasks.list.title')}</span>
          </div>
          <div className="tasks-list__wrap">
            {
              tasks.list.map((task: TASK, index: number) => (
                <Button
                  as={Link}
                  key={`task-${index}`}
                  className="task"
                  type="button"
                  target="_blank"
                  to={task.value}
                >
                  <div className="task-icon">
                    {
                      task.icon ? (
                        <Icon className="task-icon__img" name={task.icon} size="48" />
                      ) : null
                    }
                  </div>
                  <div className="task-rows">
                    <div className="task-rows__side">
                      <span className="task-title">{task.name}</span>
                      <div className="task-reward">
                        <div className="task-reward__icon">
                          <img className="task-reward__icon_img" src="/img/coin.png" alt=""/>
                        </div>
                        +{formatNumber(task.reward, 0, 0).replace(/,/g, ' ')}
                      </div>
                    </div>
                    <div className="task-rows__side">
                      <div className="task-completed">
                        {
                          task.completed ? (
                            <Icon className="task-completed__img" name="completed" size="24" />
                          ) : null
                        }
                      </div>
                    </div>
                  </div>
                </Button>
              ))
            }
          </div>
        </div>
      </div>
    </TasksWrap>
  );
};

export default connect(null, {openModal, closeModal})(Tasks);
