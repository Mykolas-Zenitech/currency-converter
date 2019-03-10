export let usdAmount = 0;
export let btcAmount = 0;

export const setUsdAmount = (newUsdAmount) => usdAmount = newUsdAmount;

export const convert = () => {
  btcAmount = usdAmount / 6000;
};
