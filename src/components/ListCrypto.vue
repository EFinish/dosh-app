<template>
  <div>
    <h1>LIST!</h1>
    <p>{{crypto}}</p>
    <button type="button" v-on:click="setPotato">potato</button>
  </div>
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
  methods: {
    setPotato: () => {
      this.$store.commit('setCrypto', [6, 7, 8]);
    }
  }
};
</script>
