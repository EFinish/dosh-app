const request = require("request");

const coinmarketcap = () => {
  const apiPrefix = "https://sandbox.coinmarketcap.com/v1";
  const apiKey = "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c"; //this is a public test key

  const getCryptoListingLatest = () => {
    return request(
      {
        url: `${apiPrefix}/cryptocurrency/listings/latest`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Accept-Charset": "utf-8",
          "X-CMC_PRO_API_KEY": apiKey
        }
      },
      (err, resp, body) => {
        const json = JSON.parse(body);

        console.log("get crypto map", json);
      }
    );
  };

  return {
    getCryptoListingLatest
  };
};

export default coinmarketcap;
