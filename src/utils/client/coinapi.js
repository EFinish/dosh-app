const axios = require('axios');

const coinapi = (function(){
  const apiPrefix = "https://rest-sandbox.coinapi.io/v1";
  const apiKey = ''; // no apikey for now

  const getCryptoListingLatest = () => {
    return axios
				.get(`${apiPrefix}/quotes/current`, {
          headers: {
            "X-CoinAPI-Key": apiKey
          }
        });
  };

  return {
    getCryptoListingLatest
  };
})();

export default coinapi;
