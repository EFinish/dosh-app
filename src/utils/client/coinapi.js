const axios = require('axios');

const coinapi = (function(){
  const apiPrefix = "https://rest.coinapi.io/v1";
  const apiKey = ''; // no apikey for now
  const reqOpts = {
    headers: {
      "X-CoinAPI-Key": apiKey
    }
  };


  const getCryptoListingLatest = () => {
    return axios
				.get(`${apiPrefix}/quotes/current`, reqOpts);
  };

  const getCryptoHistoryBySymbolId = (symbolId) => {
    return axios
        .get(`${apiPrefix}/quotes/${symbolId}/history`, {
          params: {
            time_start:'2020-01-01T00:00:00'
          },
          ...reqOpts
        });
  };

  return {
    getCryptoListingLatest,
    getCryptoHistoryBySymbolId
  };
})();

export default coinapi;
