import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    crypto: []
  },
  mutations: {
    setCrypto: (state, crypto) => {
      state.crypto = crypto;
    }
  },
  getters: {
    getCrypto: state => {
      return state.crypto;
    }
  }
});
