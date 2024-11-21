import React from 'react';
import {HeaderContainer} from "./Header.Styles";
import {WebApp} from "../../types/twa-types";
import useWebApp from "../../hooks/useWebApp";
import {WebSocketContextApi} from "../../types/webSocketTypes";
import useWebSocket from "../../hooks/useWebSocket";
import {API_URL} from "../../const/general.constants";
import {Energy} from "../../pages/Home/Home.Styles";

type Props = {
};

const Header: React.FC<Props> = () => {
  const webApp: WebApp = useWebApp();
  const { initDataUnsafe: { user } } = webApp;
  const {
    profile,
    wallet: {
      totalEnergy,
      availableEnergy
    }
  }: WebSocketContextApi = useWebSocket();

   return (
    <HeaderContainer>
      <div className="header-left">
        <div className="user-info">
          <div className="user-info__avatar">
            <img
              className="user-info__avatar_img"
              src={profile.uid ? `${API_URL}/api/v1/a/clients/${profile.uid}/avatar?w=160&h=160` : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iI0EyQUNCMCIvPgo8L3N2Zz4K"}
              alt="mememiner"
            />
          </div>
          <span className="user-info__name">{user?.first_name} {user?.last_name}</span>
        </div>
      </div>
      <div className="header-right">
        <Energy>
          <div className="energy-count">
            <div className="energy-count__icon"/>
            <span className="energy-count__text">{availableEnergy}/{totalEnergy}</span>
          </div>
          {/*<button className="energy-refill" onClick={() => clickerRefill()}>*/}
          {/*  <Icon name="rocket" size="30"/>*/}
          {/*</button>*/}
        </Energy>
      </div>
    </HeaderContainer>
  );
};

export default Header;
