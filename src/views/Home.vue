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
  import values from '../../Values.js'

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
      searchByHistory: async function () {
        const response = await axios.get(values.ip + "/api/history/search")
        this.products = response.data.data
        this.productsResponse = this.products.slice()
      },
      filter: function (filterValue) {
        for(var filter of filterValue) {
          if(filter) {
            if (filter != "up" && filter != "down" && !filter.includes("min") && !filter.includes("max")) {
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
        var min
        var max
        for(var filter of filterValue) {
          if (filter == "up") {
            this.products.sort((a, b) => (parseInt(a.productPrice.split("K")[0].trim().split("TL")[0].trim()) > parseInt(b.productPrice.split("K")[0].trim().split("TL")[0].trim())) ? 1 : ((parseInt(b.productPrice.split("K")[0].trim().split("TL")[0].trim()) > parseInt(a.productPrice.split("K")[0].trim().split("TL")[0].trim())) ? -1 : 0));
          }
          else if (filter == "down") {
            this.products.sort((a, b) => (parseInt(a.productPrice.split("K")[0].trim().split("TL")[0].trim()) > parseInt(b.productPrice.split("K")[0].trim().split("TL")[0].trim())) ? 1 : ((parseInt(b.productPrice.split("K")[0].trim().split("TL")[0].trim()) > parseInt(a.productPrice.split("K")[0].trim().split("TL")[0].trim())) ? -1 : 0)).reverse();
          }
          else if (filter.includes("min")) {
            min = filter.substring(4)
          }
          else if (filter.includes("max")) {
            max = filter.substring(4)
          }
        }

        if(max != 0) {
          var filteredProducts = []
          for(var product of this.products) {
            var price = parseInt(product.productPrice.split("K")[0].trim().split("TL")[0].trim())
            if(price > min & price < max) {
              filteredProducts.push(product)
            }
          }

          this.products = filteredProducts
        }
        else {
          var filteredProducts = []
          for(var product of this.products) {
            var price = parseInt(product.productPrice.split("K")[0].trim().split("TL")[0].trim())
            if(price > min) {
              filteredProducts.push(product)
            }
          }

          this.products = filteredProducts
        }

        if(filterValue.length == 2)
          this.products = this.productsResponse
      }
    },
    mounted() {
      this.searchByHistory()
    }
  }
</script>