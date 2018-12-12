<template>
  <div>
    <div class="text-xs-center mb-2">
      <v-chip label class="teal darken-1 white--text">Aradığınız ürünler aşağıdadır.</v-chip>
       <FilterMenu v-on:filter="filter($event)" />
    </div>
    <List v-bind:products="products" />
  </div>
</template>

<script>
  import List from '../components/List'
  import axios from 'axios'
  import values from '../../Values.js'
  import FilterMenu from '../components/Filter'

  export default {
    components: {
      List,
      FilterMenu
    },
    data() {
      return {
        products: [],
        productsResponse: []
      }
    },
    methods: {
      search: async (searchText) => {
        const response = await axios.get(values.ip + "/api/search?q=" + searchText)
        return response.data.response
      },
      filter: function (filterValue) {
        for(var filter of filterValue) {
          if(filter) {
            if (filter != "up" && filter != "down") {
              var filteredProducts = []
              for(var pro of this.productsResponse) {
                for(var filter of filterValue) {
                  if(pro.siteName.includes(filter))
                    filteredProducts.push(pro)
                }
              }
              this.products = filteredProducts
            }
          }
        }
        for(var filter of filterValue) {
          if (filter == "up") {
            this.products.sort((a, b) => (parseInt(a.productPrice.split("K")[0].trim().split("TL")[0].trim()) > parseInt(b.productPrice.split("K")[0].trim().split("TL")[0].trim())) ? 1 : ((parseInt(b.productPrice.split("K")[0].trim().split("TL")[0].trim()) > parseInt(a.productPrice.split("K")[0].trim().split("TL")[0].trim())) ? -1 : 0));
          }
          else if (filter == "down") {
            this.products.sort((a, b) => (parseInt(a.productPrice.split("K")[0].trim().split("TL")[0].trim()) > parseInt(b.productPrice.split("K")[0].trim().split("TL")[0].trim())) ? 1 : ((parseInt(b.productPrice.split("K")[0].trim().split("TL")[0].trim()) > parseInt(a.productPrice.split("K")[0].trim().split("TL")[0].trim())) ? -1 : 0)).reverse();
          }
        }
        if(filterValue.length == 0)
          this.products = this.productsResponse
      }
    },
    mounted() {
      let query = this.$route.query.search;
      this.search(query).then((response) => {  
          this.products = response
          this.productsResponse = this.products.slice()
      })
    },
    watch: {
      '$route'(to, from) {
        let query = to.query.search
        this.search(query).then((response) => {
          this.products = response
          this.productsResponse = this.products.slice()
        })
      }
    }
  }
</script>