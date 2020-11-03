<template>
  <b-container class="home">
    <b-row>
      <b-col>
        <h1>{{$route.params.assetId}} Details</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-link :to="`/`">Back to List</router-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <CryptoDetails />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CryptoDetails from "@/components/CryptoDetails.vue";

export default {
  name: "Details",
  components: {
    CryptoDetails
  }
};
</script>
