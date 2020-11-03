<template>
  <b-container class="home">
    <b-row>
      <b-col>
        <b-table striped :items="historicalData" :fields="fields">
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

import coinapi from '../utils/client/coinapi';

export default {
  name: "CryptoDetails",
  data() {
    return {
      historicalData: [],
      fields: [
          {
            key: 'time_coinapi',
            label: 'Date',
            sortable: true
          },
          {
            key: 'ask_price',
            sortable: true
          },
          {
            key: 'ask_size',
            sortable: true
          },
          {
            key: 'bid_price',
            sortable: true
          },
          {
            key: 'bid_size',
            sortable: true
          },
        ],
    };
  },
  computed: {
      ...mapState({
          crypto: 'crypto'
      })
  },
  beforeCreate() {
    coinapi.getCryptoHistoryBySymbolId(this.$route.params.symbolId)
      .then(resp => {
        let historicalData = [];

        if (resp.data) {
          historicalData = resp.data;
        }

        this.historicalData = historicalData;
      })
      .catch(err => {
        console.log('Error!', err);
      });
  }
};
</script>
