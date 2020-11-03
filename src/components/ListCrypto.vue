<template>
  <b-container class="home">
    <b-row v-if="!showTable">
      <b-col>
        Loading Market Data...
      </b-col>
    </b-row>
    <b-row v-if="!showTable">
      <b-col>
        <b-spinner variant="primary" label="Spinning"></b-spinner>
      </b-col>
    </b-row>
    <b-row v-if="showTable">
      <b-col>
        <b-table striped 
          :items="crypto" 
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc">
          <template v-slot:cell(asset_id)="data">
            <router-link :to="`/details/${data.value}`">{{ data.value }}</router-link>
          </template>
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
import { mapState } from 'vuex'

export default {
  name: "ListCrypto",
  data() {
    return {
      currentPage: 1,
      perPage: 10,
      sortBy: 'volume_1hrs_usd',
      sortDesc: true,
      fields: [
          {
            key: 'asset_id',
            label: 'Shorthand',
            sortable: true
          },
          {
            key: 'name',
            label: 'Name',
            sortable: true
          },
          {
            key: 'volume_1hrs_usd',
            label: 'Hourly Volume (USD)',
            sortable: true
          },
          {
            key: 'price_usd',
            sortable: true
          },
        ],
    };
  },
  computed: {
      ...mapState({
          crypto: 'crypto'
      }),
      rows() {
        return this.crypto.length;
      },
      showTable() {
        return this.crypto.length > 0
      }
  },
};
</script>
