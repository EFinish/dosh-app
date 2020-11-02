import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import coinmarketcap from "./utils/client/coinmarketcap";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeMount: async () => {
    const cryptoList = await coinmarketcap().getCryptoListingLatest();

    this.$store.commit('setCrypto', cryptoList);
  },
  render: h => h(App)
}).$mount("#app");
