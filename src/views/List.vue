<template>
  <b-container class="home">
    <b-row>
      <b-col>
        <h1>LIST!</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ListCrypto msg="Welcome to Your Vue.js App" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import ListCrypto from "@/components/ListCrypto.vue";

export default {
  name: "List",
  components: {
    ListCrypto
  }
};
</script>
