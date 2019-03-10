import * as model from './model.js';

export const convert = () => {
  const usdAmount = parseFloat(document.getElementById('usdAmount').value);
  model.setUsdAmount(usdAmount);
  model.convert();
  document.getElementById('btcAmount').value = model.btcAmount;
};

document.getElementById("convert").onclick = convert;
document.getElementById('usdAmount').value = model.usdAmount;
document.getElementById('btcAmount').value = model.btcAmount;
