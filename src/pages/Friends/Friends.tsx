import React, {FC} from 'react';
import {Button} from "../../elements";
import {
  FriendsWrap,
} from "./Friends.Styles";
import {nFormatter} from "../../common/utils/formatters";
import { ReactComponent as CoinSVG } from "../../assets/images/coin.svg";
import { ReactComponent as InfoSVG } from "../../assets/images/info.svg";
import { ReactComponent as CopySVG } from "../../assets/images/copy.svg";
import {friendsMock} from "../../const/mocks.constants";
import {FRIEND} from "../../types/friends";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {BOT_URL} from "../../const/general.constants";

interface Props {
}

const Friends: FC<Props> = () => {
  const { t } = useTranslation();

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      console.log('Copied to clipboard:', content);
    } catch (error) {
      console.error('Unable to copy to clipboard:', error);
    }
  };

  return (
    <FriendsWrap>
      <div className="friends-wrapper">
        <div className="friends-title__wrap">
          <span className="friends-title">Пригласите своих друзей!</span>
        </div>
        <div className="friends-description__wrap">
          <p className="friends-description">Чем больше ваши друзья зарабатывают, тем больше ваш бонус!</p>
        </div>
        <div className="friends-info">
          <div className="friends-info__btn">
            <span className="friends-info__btn_title">Пригласить друга</span>
            <div className="friends-info__btn_value">
              <div className="friends-info__btn__icon">
                <CoinSVG/>
              </div>
              +5000
            </div>
          </div>
          <div className="friends-info__btn">
            <span className="friends-info__btn_title">Пригласить друга с телеграм Premium!</span>
            <div className="friends-info__btn_value">
              <div className="friends-info__btn__icon">
                <CoinSVG/>
              </div>
              +25000
            </div>
          </div>
        </div>
        <div className="friends-list">
          <div className="friends-list__description">
            <span className="friends-list__description_title">Список друзей (4)</span>
            <div className="friends-list__description_side">
              <span className="friends-list__description_text">Как работают бонусы</span>
              <div className="friends-list__description_icon">
                <InfoSVG />
              </div>
            </div>
          </div>
          <div className="friends-list__wrap">
            {
              friendsMock.map((friend: FRIEND, index: number) => (
                <div
                  key={`friend-${index}`}
                  className="friends-friend"
                >
                  <div className="friends-friend__avatar">
                    {
                      friend.avatar ? (
                        <img
                          alt=""
                          className="friends-friend__avatar_img"
                          src={friend.avatar}
                        />
                      ) : null
                    }

                  </div>
                  <div className="friends-friend__rows">
                    <div className="friends-friend__rows_side">
                      <span className="friends-friend__title">{friend.name}</span>
                      <div className="friends-friend__info">
                        <div className="friends-friend__role_wrap">
                          <span className="friends-friend__role">{t(`friends.types.${friend.type}`)}</span>
                        </div>
                        <div className="friends-friend__balance">
                          <div className="friends-friend__balance_icon">
                            <CoinSVG/>
                          </div>
                          {nFormatter(friend.balance, 1, 3)}
                        </div>
                      </div>
                    </div>
                    <div className="friends-friend__rows_side">
                      <div className="friends-friend__profit">
                        <span className="friends-friend__profit_title">Ваш бонус в час</span>
                        <div className="friends-friend__profit_value">
                          <div className="friends-friend__profit__icon">
                            <CoinSVG/>
                          </div>
                          +{nFormatter(friend.profitPerHour, 1, 3)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="friends-actions">
          <Button
            as={Link}
            to={`https://t.me/share/url?url=${BOT_URL}?startapp=referralId12345678&text=${t('share.text')}`}
            className="friends-actions__btn"
          >
            Пригласить друга
          </Button>
          <Button
            className="friends-actions__btn -copy"
            type="button"
            onClick={() => handleCopy(`${BOT_URL}?startapp=referralId12345678`)}
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

export default Friends;
