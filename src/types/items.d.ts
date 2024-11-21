export enum ITEMS_TYPES {
  ALL = 'all',
  WEAPON = 'weapon',
  SHOES = 'shoes',
  PANTS = 'pants',
  OUTERWEAR = 'outerwear',
  HEADDRESS = 'headdress',
  WOJAK = 'wojak',
}

export enum RARITY_TYPES {
  BASE = 'base',
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary',
  MYTHIC  = 'mythic '
}

export enum ITEMS_SORT {
  RARITY = 'rarity',
  NOVELTY = 'novelty'
}

export enum FILTER_PROPS {
  PURCHASED = 'purchased'
}

export interface ITEM_TYPE {
  icon: string;
  image: string;
  type: ITEMS_TYPES;
  selected?: boolean;
  rarity: RARITY_TYPES;
  collection?: number;
  energyBonus?: number;
  id?: number;
  incomeBonus?: number;
  pointsBonusHourlyRate?: number;
  pointsHourlyRate?: number;
  price?: number;
  tapBonus?: number;
  sortIndex?: number;
  collectionId?: string;
  bought?: boolean;
}

export interface PROFILE_TYPE {
  dressed: ITEM_TYPE[]
}

export const websocketRarityToItemRarity: {[string]: RARITY_TYPES} = {
  'Base': RARITY_TYPES.BASE,
  'Common': RARITY_TYPES.COMMON,
  'Uncommon': RARITY_TYPES.UNCOMMON,
  'Rare': RARITY_TYPES.RARE,
  'Epic': RARITY_TYPES.EPIC,
  'Leg': RARITY_TYPES.LEGENDARY,
  'Mythic': RARITY_TYPES.MYTHIC,
}

export const websocketTypeToItemType: {[string]: ITEMS_TYPES} = {
  '1': ITEMS_TYPES.HEADDRESS,
  '2': ITEMS_TYPES.OUTERWEAR,
  '3': ITEMS_TYPES.PANTS,
  '4': ITEMS_TYPES.SHOES,
  '5': ITEMS_TYPES.WEAPON,
}

export const rarityToSortIndex: {[string]: number} = {
  'base' : 0,
  'common' : 1,
  'uncommon': 2,
  'rare': 3,
  'epic': 4,
  'legendary': 5,
  'mythic': 6,
}
