const axios = require("axios");

const coinapi = (function() {
  const apiPrefix = "https://rest.coinapi.io/v1";
  const apiKey = ""; // no apikey for now
  const reqOpts = {
    headers: {
      "X-CoinAPI-Key": apiKey
    }
  };

  const getCryptoListingLatest = () => {
    return axios.get(`${apiPrefix}/assets`, reqOpts);
  };

  const getCryptoHistoryByAssetId = assetId => {
    return axios.get(`${apiPrefix}/ohlcv/${assetId}/USD/history`, {
      params: {
        period_id: "1DAY",
        time_start: "2020-01-01T00:00:00"
      },
      ...reqOpts
    });
  };

  return {
    getCryptoListingLatest,
    getCryptoHistoryByAssetId
  };
})();

export default coinapi;
