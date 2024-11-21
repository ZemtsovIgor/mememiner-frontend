import {Context, createContext} from 'react';
import {IBonus, IClient, ITask, WebSocketContextApi, WebSocketPaginator} from '../types/webSocketTypes';

export type PizzaInitParams = {
  wsURL: string;
  apiURL: string;
  wsapiURL: string;
  kID: string;
  kPublic: string;
  kPrivate: string;
  onWSOpen: () => void;
  onWSClose: () => void;
};

export type PizzaType = {
  Initialized: boolean;
  Init: (params: PizzaInitParams) => void;
  On: (name: string, func: (envelope: any, message: any) => void) => void;
  WSMe: (callback: (envelope: any, message: any) => void) => void;
  WSTap: () => void;
  WSState: () => void;
  WSInvitees: (payload: WebSocketPaginator, callback: (envelope: any, message: {meta?: WebSocketPaginator; clients?: IClient[]}) => void) => void;
  WSAuth: (payload: { provider: string, username: string, password: string }, callback: (envelope: any, message: any) => void) => void;
  LastPingTime: number;
  WSInventoryItemsParams: (callback: (envelope: any, message: any) => void) => void;
  WSInventory: (callback: (envelope: any, message: { items: any }) => void) => void;
  WSBuyInventoryItem: (payload: {item: string, id: number }, callback: (envelope: any, message: any) => void) => void;
  WSSetStateInventoryItem: (payload: {Collection: string, ID: number }, callback: (envelope: any, message: any) => void) => void;
  WSTasks: (callback: (envelope: any, message: { tasks: ITask[] }) => void) => void;
  WSDailyBonuses: (callback: (envelope: any, message: { bonuses: IBonus[] }) => void) => void;
  WSClaimDailyBonuses: (callback: (envelope: any, message: { bonuses: IBonus[] }) => void) => void;
};

// @ts-ignore
export const DEFAULT_PIZZA: PizzaType = typeof window !== 'undefined' && window?.Pizza ? window.Pizza : null;
export const PizzaContext: Context<PizzaType> = createContext<typeof DEFAULT_PIZZA>(DEFAULT_PIZZA);
export const WebSocketContext: Context<WebSocketContextApi | undefined> = createContext<WebSocketContextApi | undefined>(undefined);

