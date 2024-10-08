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
