import {IState, WebSocketWallet} from "../../types/webSocketTypes";

export const formatNumber = (number: number | string, minPrecision = 2, maxPrecision = 2) => {
  const newNumber = Number(number);
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  }
  return newNumber.toLocaleString(undefined, options)
}

export const nFormatter = (num: number, digits: number, minPrecision: number = 10000) => {
  const lookup: {value: number, symbol: string}[] = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "G" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "k" },
    { value: 1, symbol: "" },
  ];

  const item = lookup.find(item => num >= item.value && num >= minPrecision) || lookup[lookup.length - 1];
  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }
  const newNumber: number = item ? Number((num / item.value).toFixed(digits)) : 0;
  return item ? newNumber.toLocaleString(undefined, options).concat(item.symbol) : "0";
}

export const clientStateToProfileState = (state: IState | undefined, timestampMS: string): WebSocketWallet  => {
  return {
    points: state?.Points || 0,
    pointsHourlyRate: state?.PointsHourlyRate || 0,
    totalPointsHourlyRate: state?.TotalPointsHourlyRate || 0,
    rank: state?.Rank || 0,
    rankThreshold: state?.RankThreshold || 0,
    energyLevel: state?.EnergyLevel || 1,
    tapThreshold: state?.TapThreshold || 1,
    totalPointsPerTap: state?.TotalPointsPerTap || 1,
    tapLevel: state?.TapLevel || 0,
    energyThreshold: state?.EnergyThreshold || 0,
    totalEnergy: state?.TotalEnergy || 0,
    availableEnergy: state?.AvailableEnergy || 0,
    refPointsToParent: state?.RefPointsToParent || 0,
    refPointsToParentIfPremium: state?.RefPointsToParentIfPremium || 0,
    refPointsToInvitee: state?.RefPointsToInvitee || 0,
    pointsBonusHourlyRate: state?.PointsBonusHourlyRate || 0,
    item1Collection: state?.Item_1_Collection?.includes('_Empty_') ? state?.Item_1_Collection?.replace('_Empty_', '_Base_') : state?.Item_1_Collection || 'Items_Base_1_0',
    item1Id: state?.Item_1_ID || 0,
    item2Collection: state?.Item_2_Collection?.includes('_Empty_') ? state?.Item_2_Collection?.replace('_Empty_', '_Base_') : state?.Item_2_Collection || 'Items_Base_2_0',
    item2Id: state?.Item_2_ID || 0,
    item3Collection: state?.Item_3_Collection?.includes('_Empty_') ? state?.Item_3_Collection?.replace('_Empty_', '_Base_') : state?.Item_3_Collection || 'Items_Base_3_0',
    item3Id: state?.Item_3_ID || 0,
    item4Collection: state?.Item_4_Collection?.includes('_Empty_') ? state?.Item_4_Collection?.replace('_Empty_', '_Base_') : state?.Item_4_Collection || 'Items_Base_4_0',
    item4Id: state?.Item_4_ID || 0,
    item5Collection: state?.Item_5_Collection?.includes('_Empty_') ? state?.Item_5_Collection?.replace('_Empty_', '_Base_') : state?.Item_5_Collection || 'Items_Base_5_0',
    item5Id: state?.Item_5_ID || 0,
    lastUpdate: Number(timestampMS) / 1000,
    lastBonusedDay: state?.LastBonusedDay || 0,
    forParentPointsBonusHourlyRate: state?.ForParent?.PointsBonusHourlyRate || 0,
  }
}
