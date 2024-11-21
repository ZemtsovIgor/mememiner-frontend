
export interface TASK {
  name: string;
  icon?: string;
  reward: number;
  completed: boolean;
  kind?: string;
  value?: string;
}

export enum REWARD_TYPES {
  COINS = 'coins',
  CLOTHING = 'clothing'
}

export interface REWARD {
  name: string;
  icon: string | null;
  amount: number;
  completed: boolean;
  type: REWARD_TYPES;
}

export interface DAILY_BONUS {
  day: number;
  amount: number;
  claimable: boolean;
  type: REWARD_TYPES;
}

