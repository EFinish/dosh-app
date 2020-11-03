<template>
  <b-container class="home">
    <b-row>
      <b-col>
        <b-table striped :items="crypto" :fields="fields">
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "ListCrypto",
  data() {
    return {
      fields: [
          {
            key: 'symbol_id',
            sortable: false
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
};
</script>
