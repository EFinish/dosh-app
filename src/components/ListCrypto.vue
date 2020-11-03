<template>
  <b-container class="home">
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item v-for="cryptoCurrency in crypto" v-bind:key="cryptoCurrency.symbol_id">
            {{cryptoCurrency}}
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "ListCrypto",
  computed: {
      ...mapState({
          crypto: 'crypto'
      })
  },
};
</script>
