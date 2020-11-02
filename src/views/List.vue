<template>
  <div class="home">
    <ListCrypto msg="Welcome to Your Vue.js App" />
  </div>
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
