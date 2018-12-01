<template>
  <div>
    <v-layout row wrap>    
      <v-flex xs12 sm6 md3 v-for="product in products" v-bind:key="product.productLink" @click="goToProductDet($event, product.productLink)">
        <v-card height="100%" class="flexcard">
          <v-img v-bind:src="product.productImage" height=250></v-img>
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
    }
  }
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>