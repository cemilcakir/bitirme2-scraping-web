<template>
  <div>
    <div class="text-xs-center mb-3">
      <v-chip label class="teal darken-1 white--text">Geçmişinize göre bakmanızı önerdiğimiz ürünler aşağıdadır.</v-chip>
      <FilterMenu v-on:filter="filter($event)" />
    </div>
    <List v-bind:products="products" />
  </div>
</template>

<script>
  import List from '../components/List'
  import axios from 'axios'
  import FilterMenu from '../components/Filter'

  export default {
    components: {
      List,
      FilterMenu
    },
    data() {
      return {
        products: []
      }
    },
    methods: {
      searchByHistory: async function () {
        const response = await axios.get("http://localhost:3000/api/history/search")
        this.products = response.data.data
      },
      filter: function (filterValue) {
       
      }
    },
    mounted() {
      this.searchByHistory()
    }
  }
</script>