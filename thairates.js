  let app_id = 'fc09336f0ad94b5ea4dacad7b106f98a';
  fetch(`https://openexchangerates.org/api/latest.json?app_id=${app_id}&symbols=THB,MYR`)
  .then(response => response.json())
  .then(data => {
    let exchangeRate = parseFloat((data.rates.THB / data.rates.MYR).toFixed(2));
    document.getElementById("exchange-rate").innerHTML = "World Rates: " + exchangeRate;
  });
