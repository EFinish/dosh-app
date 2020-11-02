import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import coinapi from "./utils/client/coinapi";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created: () => {
    const cryptoList = coinapi.getCryptoListingLatest();
    this.$store.commit('setCrypto', cryptoList);
  },
  render: h => h(App)
}).$mount("#app");
