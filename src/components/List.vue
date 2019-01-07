<template>
  <div>
    <v-layout row wrap>    
      <v-flex xs12 sm6 md3 v-for="product in pageContent" v-bind:key="product.productLink" @click="goToProductDet($event, product.productLink)">
        <v-card height="100%" class="flexcard">
          <v-img v-bind:src="product.productImage" aspect-ratio="0.8" v-if="product.siteName != 'n11'"></v-img>
          <v-img v-bind:src="require('../assets/n11.png')" aspect-ratio="0.8" v-else></v-img>
          <v-card-text>
            <div>{{ product.productName }}</div>
          </v-card-text>
          <v-card-actions>
             <v-spacer></v-spacer>
            <v-chip flat color="teal lighten-1">{{ product.productPrice.split("K")[0].trim() }}</v-chip>
            <v-spacer></v-spacer>
            <v-chip flat color="teal lighten-1">{{ product.siteName }}</v-chip>
             <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <div class="text-xs-center">
      <v-pagination v-model="page" :length="pageSize" circle></v-pagination>
      </div>
    </div>
</template>

<script>
  export default {
    props: ["products"],
    methods: {
      goToProductDet(event, link) {
        event.preventDefault()
        this.$router.push({
          path: '/detail',
          query: {
            link: link
          }
        })
      }
    },
    data() {
      return {
        page: 1,
        pageSize: 1,
        pageContent: []
      }
    },
    watch: {
      products: function(newProducts, oldProducts) {
        this.page = 1
        this.pageSize = parseInt(newProducts.length / 16) + 1
        this.pageContent = this.products.slice(16*(this.page - 1), 16*this.page)
      },
      page: function(thisPage, prevPage) {
        this.pageContent = this.products.slice(16*(thisPage - 1), 16*thisPage)
      }
    }
  }
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>