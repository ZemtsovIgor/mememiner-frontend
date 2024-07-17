import { useEffect } from 'react';
import usePizza from './usePizza';
import useWebSocket from './useWebSocket';
import {PizzaType} from "../contexts/webSocketContext";
import {WebSocketContextApi} from "../types/webSocketTypes";

interface IStore extends PizzaType, WebSocketContextApi {}

const useStore: () => readonly [IStore] = () => {
  const Pizza: PizzaType = usePizza();
  const WebSocket: WebSocketContextApi = useWebSocket();
  const store: IStore = {...Pizza, ...WebSocket};


  useEffect(() => {
    if (!Pizza) return;
    console.log('Pizza changed', Pizza);
  }, [Pizza]);

  return [store] as const;
};

export default useStore;