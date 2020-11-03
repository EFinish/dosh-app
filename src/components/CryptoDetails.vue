<template>
  <b-container class="home">
    <b-row v-if="!showTable">
      <b-col> Loading {{ $route.params.assetId }} Historical Data... </b-col>
    </b-row>
    <b-row v-if="!showTable">
      <b-col>
        <b-spinner variant="primary" label="Spinning"></b-spinner>
      </b-col>
    </b-row>
    <b-row v-if="showTable">
      <b-col>
        <b-table
          striped
          :items="historicalData"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
        >
        </b-table>
      </b-col>
    </b-row>
    <b-row v-if="showTable">
      <b-col offset="4">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import coinapi from "../utils/client/coinapi";

export default {
  name: "CryptoDetails",
  data() {
    return {
      currentPage: 1,
      perPage: 10,
      sortBy: "time_period_start",
      sortDesc: true,
      historicalData: [],
      fields: [
        {
          key: "time_period_start",
          label: "Date",
          sortable: true
        },
        {
          key: "price_open",
          sortable: true
        },
        {
          key: "price_close",
          sortable: true
        },
        {
          key: "price_high",
          sortable: true
        },
        {
          key: "price_low",
          sortable: true
        },
        {
          key: "volume_traded",
          sortable: true
        }
      ]
    };
  },
  computed: {
    rows() {
      return this.historicalData.length;
    },
    showTable() {
      return this.historicalData.length > 0;
    }
  },
  beforeCreate() {
    coinapi
      .getCryptoHistoryByAssetId(this.$route.params.assetId)
      .then(resp => {
        let historicalData = [];

        if (resp.data) {
          historicalData = resp.data;
        }

        this.historicalData = historicalData;
      })
      .catch(err => {
        console.log("Error!", err);
      });
  }
};
</script>
