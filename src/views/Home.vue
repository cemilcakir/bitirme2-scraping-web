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
        this.products = this.productsResponse
        var min = 0
        var max = 0
        for (var filter of filterValue) {
          if (filter) {
            if (filter.includes("min-")) {
              min = parseInt(filter.substring(4))
              filterValue.splice(filterValue.indexOf(filter), 1);
            }
          }
        }
        for (var filter of filterValue) {
          if (filter) {
            if (filter.includes("max-")){
              max = parseInt(filter.substring(4))
              filterValue.splice(filterValue.indexOf(filter), 1);
            }
          }
        }
        
        var filteredProducts = []
        for(var filter of filterValue) {
          if(filter) {
            if (filter != "up" && filter != "down") {
              for(var pro of this.productsResponse) {
                for (var filter of filterValue) {
                  if (pro.siteName.includes(filter)) {
                    filteredProducts.push(pro)
                  }
                }
              }
            }
          }
        }
        this.products = filteredProducts

        if(filterValue.length == 0 && min == 0 && max == 0) {
          this.products = this.productsResponse
        }
        else if((min != 0 || max != 0) && filterValue.length == 0) {
          this.products = this.productsResponse
        }
        else if((min != 0 || max != 0) && (filterValue.includes("up") || filterValue.includes("down"))){
          this.products = this.productsResponse
        }
        
        if (min != 0 || max != 0) {
          var test = []
          for (var pro of this.products) {
            if (parseInt(pro.productPrice.trim().replace(".", "")) >= min) {
              if(max > 0) {
                if(parseInt(pro.productPrice.trim().replace(".", "")) <= max) {
                  test.push(pro)
                }
              }
              else {
                test.push(pro)
              }
            }
          }
          this.products = test
        }

        for(var filter of filterValue) {
          if (filter == "up") {
            this.products.sort((a, b) => (parseInt(a.productPrice.trim().replace(",", "").replace(".", "")) > parseInt(b.productPrice.trim().replace(",", "").replace(".", ""))) ? 1 : ((parseInt(b.productPrice.trim().replace(",", "").replace(".", "")) > parseInt(a.productPrice.trim().replace(",", "").replace(".", ""))) ? -1 : 0));
          }
          else if (filter == "down") {
            this.products.sort((a, b) => (parseInt(a.productPrice.trim().replace(",", "").replace(".", "")) > parseInt(b.productPrice.trim().replace(",", "").replace(".", ""))) ? 1 : ((parseInt(b.productPrice.trim().replace(",", "").replace(".", "")) > parseInt(a.productPrice.trim().replace(",", "").replace(".", ""))) ? -1 : 0)).reverse();
          }
        }
      }
    },
    mounted() {
      this.searchByHistory()
    }
  }
</script>