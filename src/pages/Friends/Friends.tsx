import React, {FC, useEffect, useRef} from 'react';
import {Button, Loader} from "../../elements";
import {
  FriendsWrap,
} from "./Friends.Styles";
import {nFormatter} from "../../common/utils/formatters";
import { ReactComponent as CoinSVG } from "../../assets/images/coin.svg";
import { ReactComponent as InfoSVG } from "../../assets/images/info.svg";
import { ReactComponent as CopySVG } from "../../assets/images/copy.svg";
import {FRIEND, USER_TYPE_BY_RANK, USER_TYPES} from "../../types/friends.d";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {API_URL, BOT_URL} from "../../const/general.constants";
import useWebSocket from "../../hooks/useWebSocket";
import {LOADING_TYPES} from "../../types/app.d";
import {DEFAULT_FRIENDS_LOADING_LIMIT} from "../../const/app.constants";
import {WebSocketPaginator} from "../../types/webSocketTypes";
import {Clue} from "../../components/Modals";
import {connect} from "react-redux";
import {closeModal, openModal} from "../../store/app/actions";

interface Props {
  openModal: (payload: any) => void;
  closeModal: () => void;
}

const Friends: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const {
    openModal,
    closeModal
  } = props;
  const {
    wallet: {
      refPointsToParent,
      refPointsToParentIfPremium
    },
    profile: {
      uid
    },
    friends,
    getInvitees
  } = useWebSocket();
  const listContainer = useRef(null);

  useEffect(() => {
    if (friends.loaded === LOADING_TYPES.NOT_LOADED) {
      getInvitees({limit: DEFAULT_FRIENDS_LOADING_LIMIT});
    }
  }, [friends.loaded]);

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (error) {
      console.error('Unable to copy to clipboard:', error);
    }
  };

  const handleScroll = () => {
    if ((friends.meta.total || 0) <= friends.list.length) {
      return false;
    }
    if (listContainer.current) {
      const { scrollTop, scrollHeight, clientHeight } = listContainer.current;
      if ((scrollTop + 1) > (scrollHeight - clientHeight)) {
        getFriends()
      }
    }
  };

  const getFriends = () => {
    const newPagination: WebSocketPaginator = {
      limit: friends.meta.limit || DEFAULT_FRIENDS_LOADING_LIMIT,
      offset: friends.meta.offset || 0,
    };
    // @ts-ignore
    newPagination.offset += newPagination.limit;
    getInvitees(newPagination);
  };

  const handleOpenModal = (payload: any) => {
    if (!openModal) return
    openModal(payload)
  };

  const modalClue = () => (
    <div className="modal-content">
      <div className="modal-pickUpCoins">
        <Clue title={t('modals.bonuses.title')} text={t('modals.bonuses.description')} />
      </div>
    </div>
  );

  return (
    <FriendsWrap>
      <div className="friends-wrapper">
        <div className="friends-title__wrap">
          <span className="friends-title">{t('friends.title')}</span>
        </div>
        <div className="friends-description__wrap">
          <p className="friends-description">{t('friends.description')}</p>
        </div>
        <div className="friends-info">
          <Button
            className="friends-info__btn"
            as={Link}
            to={`https://t.me/share/url?url=${BOT_URL}?start=${uid}&text=${t('share.text')}`}
          >
            <span className="friends-info__btn_title">{t('friends.btns.invite')}</span>
            <div className="friends-info__btn_value">
              <div className="friends-info__btn__icon">
                <CoinSVG/>
              </div>
              +{refPointsToParent}
            </div>
          </Button>
          <Button
            className="friends-info__btn"
            as={Link}
            to={`https://t.me/share/url?url=${BOT_URL}?start=${uid}&text=${t('share.text')}`}
          >
            <span className="friends-info__btn_title">{t('friends.btns.invite_premium')}</span>
            <div className="friends-info__btn_value">
              <div className="friends-info__btn__icon">
                <CoinSVG/>
              </div>
              +{refPointsToParentIfPremium}
            </div>
          </Button>
        </div>
        <div className="friends-list">
          <div className="friends-list__description">
            <span className="friends-list__description_title">{t('friends.list.total')} ({friends.meta.total || 0})</span>
            <div
              className="friends-list__description_side"
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
              <span className="friends-list__description_text">{t('friends.list.how_this_works')}</span>
              <div className="friends-list__description_icon">
                <InfoSVG />
              </div>
            </div>
          </div>
          <div
            ref={listContainer}
            className="friends-list__wrap"
            onScroll={handleScroll}
          >
            {
              friends.list.map((friend: FRIEND, index: number) => (
                <div
                  key={`friend-${index}`}
                  className="friends-friend"
                >
                  <div className="friends-friend__avatar">
                    {
                      friend.uid ? (
                        <img
                          alt=""
                          className="friends-friend__avatar_img"
                          src={`${API_URL}/api/v1/a/clients/${friend.uid}/avatar?w=160&h=160`}
                        />
                      ) : null
                    }

                  </div>
                  <div className="friends-friend__rows">
                    <div className="friends-friend__rows_side">
                      <span className="friends-friend__title">{friend.firstname} {friend.lastname}</span>
                      <div className="friends-friend__info">
                        <div className="friends-friend__role_wrap">
                          <span className="friends-friend__role">{t(`friends.types.${friend.state?.rank ? USER_TYPE_BY_RANK[friend.state?.rank] : USER_TYPES.SLAVE}`)}</span>
                        </div>
                        <div className="friends-friend__balance">
                          <div className="friends-friend__balance_icon">
                            <CoinSVG/>
                          </div>
                          {nFormatter(friend.state?.points || 0, 1, 3)}
                        </div>
                      </div>
                    </div>
                    <div className="friends-friend__rows_side">
                      <div className="friends-friend__profit">
                        <span className="friends-friend__profit_title">{t('progress.your_bonus_per_hour')}</span>
                        <div className="friends-friend__profit_value">
                          <div className="friends-friend__profit__icon">
                            <CoinSVG/>
                          </div>
                          +{nFormatter(friend.state?.forParentPointsBonusHourlyRate || 0, 1, 3)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

            {
              friends.loaded === LOADING_TYPES.LOADING ? (
                <Loader />
              ) : null
            }
          </div>
        </div>
        <div className="friends-actions">
          <Button
            as={Link}
            to={`https://t.me/share/url?url=${BOT_URL}?start=${uid}&text=${t('share.text')}`}
            className="friends-actions__btn"
          >
            {t('friends.btns.invite')}
          </Button>
          <Button
            className="friends-actions__btn -copy"
            type="button"
            onClick={() => handleCopy(`${BOT_URL}?start=${uid}`)}
          >
            <div className="friends-actions__btn_icon">
              <CopySVG />
            </div>
          </Button>
        </div>
      </div>
    </FriendsWrap>
  );
};

export default connect(null, {openModal, closeModal})(Friends);
