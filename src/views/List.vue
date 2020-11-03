<template>
  <b-container class="home">
    <b-row>
      <b-col>
        <h1>Crypto Currencies</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ListCrypto />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ListCrypto from "@/components/ListCrypto.vue";

export default {
  name: "List",
  components: {
    ListCrypto
  }
};
</script>
