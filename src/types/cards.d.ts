export enum CARD_TYPES {
  BUILDING = 'building',
  WORKERS = 'workers',
  ARMY = 'army',
  EVENTS = 'events',
}

export interface CARD {
  id: string;
  name: string;
  description: string;
  level: number;
  nextLevel: number;
  price: number;
  image: string;
  type: CARDS_TYPES;
  collection?: number;
  energyBonus?: number;
  nextEnergyBonus?: number;
  incomeBonus?: number;
  nextIncomeBonus?: number;
  pointsBonusHourlyRate?: number;
  nextPointsBonusHourlyRate?: number;
  pointsHourlyRate?: number;
  nextPointsHourlyRate?: number;
  tapBonus?: number;
  nextTapBonus?: number;
  levels: any;
  bought?: boolean;
}


export const websocketTypeToMLCardType: {[string]: CARD_TYPES} = {
  '1': CARD_TYPES.BUILDING,
  '2': CARD_TYPES.WORKERS,
  '3': CARD_TYPES.ARMY,
}

