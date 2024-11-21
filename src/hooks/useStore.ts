import { useEffect } from 'react';
import usePizza from './usePizza';
import useWebSocket from './useWebSocket';
import {PizzaType} from "../contexts/webSocketContext";
import {IState, PIZZA_STATUS_TYPES, WebSocketContextApi} from "../types/webSocketTypes.d";
import {clientStateToProfileState} from "../common/utils/formatters";

interface IStore extends PizzaType, WebSocketContextApi {}

const useStore: () => readonly [IStore] = () => {
  const pizza: PizzaType = usePizza();
  const webSocket: WebSocketContextApi = useWebSocket();
  const store: IStore = {...pizza, ...webSocket};


  useEffect(() => {
    if (!pizza) return;
    const eventHandler = (envelope: any, message: { state: IState; }) => {
      console.log('RState message', message);
      webSocket.setPizzaState(PIZZA_STATUS_TYPES.WALLET_RECEIVED);
      webSocket.setWalletParams(clientStateToProfileState(message.state, envelope.id || '0'));
    };

    pizza.On('RState', eventHandler);
  }, [pizza]);

  return [store] as const;
};

export default useStore;
