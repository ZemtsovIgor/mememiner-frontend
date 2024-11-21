import React, {useEffect} from 'react';
import { ReactComponent as LoadingSVG } from "../../assets/images/loading.svg";
import { LoadingStyles } from './Loading.Styles';
import {PIZZA_STATUS_TYPES, WebSocketContextApi} from "../../types/webSocketTypes.d";
import useWebSocket from "../../hooks/useWebSocket";
import {LOADING_TYPES} from "../../types/app.d";

const Loading: React.FC = () => {
  const webSocket: WebSocketContextApi = useWebSocket();
  const {init, pizzaState, pizzaInit, inventory, cards} = webSocket;

  useEffect(() => {
    if (pizzaState === PIZZA_STATUS_TYPES.NOT_LOADED) {
      init();
    }
  }, [pizzaState]);

  useEffect(() => {
    if (inventory.loaded === LOADING_TYPES.LOADED && cards.loaded === LOADING_TYPES.LOADED) {
      webSocket.setPizzaInit(false);
    }
  }, [inventory.loaded, cards.loaded, pizzaState]);

  return (
    <LoadingStyles>
      <div className="image">
        <LoadingSVG/>
        {
          pizzaInit && pizzaState !== PIZZA_STATUS_TYPES.INVENTORY_RECEIVED ? (
            <span className="state">{pizzaState}</span>
          ) : null
        }
      </div>
    </LoadingStyles>
  );
};

export default Loading;
