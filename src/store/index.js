import Vue from "vue";
import Vuex from "vuex";

import coinapi from "../utils/client/coinapi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    crypto: []
  },
  mutations: {
    setCrypto(state, payload) {
      state.crypto = payload;
    }
  },
  getters: {
    getCrypto(state) {
      return state.crypto;
    }
  },
  actions: {
    initCrypto(context) {
      coinapi
        .getCryptoListingLatest()
        .then(function(response) {
          let newCryptoData = [];

          if (response.data) {
            newCryptoData = response.data;
          }

          context.commit("setCrypto", newCryptoData);
        })
        .catch(function(error) {
          console.log("FAILURE!!", error);
        });
    }
  }
});
