import React, {FC} from 'react';
import {Button, Icon} from "../../elements";
import {
  TasksWrap,
} from "./Tasks.Styles";
import {formatNumber} from "../../common/utils/formatters";
import {tasksMock} from "../../const/mocks.constants";
import {TASK} from "../../types/tasks.d";
import {useTranslation} from "react-i18next";
import {DailyReward} from "../../components/Modals";
import {connect} from "react-redux";
import {closeModal, openModal} from "../../store/app/actions";

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
          <div
            className="tasks-info__btn"
            onClick={() => handleOpenModal({
              closeModal: handleCloseModal,
              className: "modal modalImproveCard",
              content: modalDailyReward,
            })}
          >
            <div className="tasks-info__btn_icon">
              <img className="tasks-info__btn_icon_img" src="/img/coin.png" alt=""/>
            </div>
            <span className="tasks-info__btn_title">Ежедневная Награда</span>
          </div>
        </div>
        <div className="tasks-list">
          <div className="tasks-list__description">
            <span className="tasks-list__description_title">Список заданий</span>
          </div>
          <div className="tasks-list__wrap">
            {
              tasksMock.map((task: TASK, index: number) => (
                <Button
                  key={`task-${index}`}
                  className="task"
                  type="button"
                  onClick={() => console.log('task')}
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
