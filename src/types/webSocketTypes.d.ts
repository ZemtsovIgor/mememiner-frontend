import {FRIEND} from "./friends";
import {LOADING_TYPES} from "./app";
import {ITEM_TYPE} from "./items";
import {CARD} from "./cards";
import {DAILY_BONUS, TASK} from "./tasks";

export type IState = {
  Points?: number;
  PointsHourlyRate?: number;
  TotalPointsHourlyRate?: number;
  Rank?: number;
  RankThreshold?: number;
  EnergyLevel?: number;
  TapThreshold?: number;
  TotalPointsPerTap?: number;
  TapLevel?: number;
  EnergyThreshold?: number;
  TotalEnergy?: number;
  AvailableEnergy?: number;
  RefPointsToParent?: number;
  RefPointsToParentIfPremium?: number;
  RefPointsToInvitee?: number;
  PointsBonusHourlyRate?: number;
  Item_1_Collection?: string;
  Item_1_ID?: number;
  Item_2_Collection?: string;
  Item_2_ID?: number;
  Item_3_Collection?: string;
  Item_3_ID?: number;
  Item_4_Collection?: string;
  Item_4_ID?: number;
  Item_5_Collection?: string;
  Item_5_ID?: number;
  LastBonusedDay?: number;
  ForParent?: {
    PointsBonusHourlyRate?: number;
  }
};

export type IClient = {
  uid: string | null;
  firstname?: string | null;
  lastname?: string | null;
  state?: IState;
};

export type IInventory = {
  EnergyBonus?: number;
  ID?: number;
  IncomeBonus?: number;
  PointsBonusHourlyRate?: number;
  PointsHourlyRate?: number;
  Price?: number;
  TapBonus?: number;
};

export type IMLCard = {
  EnergyBonus?: number;
  ID?: number;
  IncomeBonus?: number;
  PointsBonusHourlyRate?: number;
  PointsHourlyRate?: number;
  Price?: number;
  TapBonus?: number;
};

export type ITask = {
  kind: string;
  name: string;
  reward: number;
  value: string;
  completed?: boolean;
};

export type IBonus = {
  Day: number;
  Amount: number;
  Claimable?: boolean;
};

export type WebSocketWallet = {
  points: number;
  pointsHourlyRate: number;
  totalPointsHourlyRate: number;
  rank: number;
  rankThreshold: number;
  energyLevel: number;
  tapThreshold: number;
  totalPointsPerTap: number;
  tapLevel: number;
  energyThreshold: number;
  totalEnergy: number;
  availableEnergy: number;
  refPointsToParent: number;
  refPointsToParentIfPremium: number;
  refPointsToInvitee: number;
  pointsBonusHourlyRate: number;
  item1Collection: string;
  item1Id: number;
  item2Collection: string;
  item2Id: number;
  item3Collection: string;
  item3Id: number;
  item4Collection: string;
  item4Id: number;
  item5Collection: string;
  item5Id: number;
  lastUpdate?: number;
  lastTap?: number;
  lastBonusedDay?: number;
  forParentPointsBonusHourlyRate?: number;
  refillEnergy?: number;
  refillCoins?: number;
};

export type WebSocketProfile = {
  uid: string | null;
  firstname: string;
  lastname: string;
  state?: WebSocketWallet;
};

export interface WebSocketPaginator {
  limit: number;
  offset?: number;
  total?: number;
  order?: number;
}

export enum PIZZA_STATUS_TYPES {
  NOT_LOADED = 'NOT_LOADED',
  INITIALIZING = 'INITIALIZING',
  WS_OPENED = 'WS_OPENED',
  WS_DISCONNECTED = 'WS_DISCONNECTED',
  USER_AUTHORIZED = 'USER_AUTHORIZED',
  FAILED_AUTHORIZATION = 'FAILED_AUTHORIZATION',
  WALLET_RECEIVED = 'WALLET_RECEIVED',
  INVENTORY_RECEIVED = 'INVENTORY_RECEIVED',
}
export interface WebSocketContextApi {
  pizzaInit: boolean;
  setPizzaInit: (payload: boolean) => void;
  pizzaState: PIZZA_STATUS_TYPES;
  setPizzaState: (payload: PIZZA_STATUS_TYPES) => void;
  profile: WebSocketProfile;
  wallet: WebSocketWallet;
  friends: { loaded: LOADING_TYPES; meta: WebSocketPaginator; list: FRIEND[]; }
  setWalletParams: (payload: WebSocketWallet) => void;
  init: () => void;
  sendTap: (timeStamp: number) => void;
  getInvitees: (payload: WebSocketPaginator) => void;
  getInventory: () => void;
  inventory: {
    loaded: LOADING_TYPES;
    list: ITEM_TYPE[];
  }
  cards: {
    loaded: LOADING_TYPES;
    list: CARD[];
  };
  buyInventoryItem: (item: string, id: number) => void;
  setInventoryItem: (collection: string, id: number) => void;
  tasks: {
    loaded: LOADING_TYPES;
    list: TASK[];
  };
  dailyBonuses: {
    loaded: LOADING_TYPES;
    bonuses: DAILY_BONUS[];
  };
  getDailyBonuses: () => void;
  claimDailyBonus: () => void;
}
