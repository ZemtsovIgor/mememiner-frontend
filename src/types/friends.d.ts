import {WebSocketWallet} from "./webSocketTypes";

export enum USER_TYPES {
  SLAVE = 'slave',
  FARMER = 'farmer',
  BARON = 'baron',
  LORD = 'lord',
}

export interface FRIEND {
  uid: string | null;
  firstname?: string | null;
  lastname?: string | null;
  state: WebSocketWallet | null;
}

export const USER_TYPE_BY_RANK: any = {
  1: 'slave',
  2: 'farmer',
  3: 'craftsman',
  4: 'merchant',
  5: 'squire',
  6: 'knight',
  7: 'baron',
  8: 'viscount',
  9: 'count',
  10: 'marquis',
  11: 'duke',
  12: 'lord',
  13: 'prince',
  14: 'king',
};

