<template>
  <nav>
    <v-toolbar flat absolute color="teal lighten-3" dark scroll-off-screen scroll-target="#scrolling-techniques">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="headline white--text" @click="goToHome()">
        <span>Bitirme 2 </span>
        <span class="font-weight-light">Web Scraping</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-icon large @click="takeQuery($event)">
        search
      </v-icon>

      <v-text-field label="Arama" clearable v-model="searchText"></v-text-field>

    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="teal lighten-2">
      <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <div class="subheading">Cemil ÇAKIR</div>
            <div class="body-1">cemilcakir@outlook.com.tr</div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-container>
        <v-layout row wrap align-center>

          <v-list ay-center>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="white--text" @click="goToHome()">Anasayfa</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>show_chart</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="white--text" @click="goToAnalysis()">İstatistikler</v-list-tile-title>
            </v-list-tile>
            <v-list-group prepend-icon="history" value="true">
              <v-list-tile slot="activator">
                <v-list-tile-title class="white--text">Geçmiş</v-list-tile-title>
              </v-list-tile>

              <v-list-group no-action sub-group value="true">
                <v-list-tile slot="activator">
                  <v-list-tile-title class="white--text">Aranan Kelimeler</v-list-tile-title>
                </v-list-tile>

                <v-list-tile v-for="(query, i) in searchedQueries" :key="i">
                  <v-list-tile-title v-text="query.query" class="white--text" @click="newSearch($event, query.query)"></v-list-tile-title>
                </v-list-tile>

              </v-list-group>

              <v-list-group sub-group no-action>
                <v-list-tile slot="activator">
                  <v-list-tile-title class="white--text">Bakılan Ürünler</v-list-tile-title>
                </v-list-tile>

                <v-list-tile v-for="(product, i) in searchedProducts" :key="i">
                  <v-list-tile-title v-text="product.product.substr(0,20) + '...'" class="white--text" @click="goToProductDet($event, product.link)"></v-list-tile-title>
                </v-list-tile>

              </v-list-group>
            </v-list-group>
          </v-list>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  import axios from 'axios'
  import values from '../../Values.js'

  export default {
    data() {
      return {
        drawer: false,
        searchText: "",
        searchedQueries: [],
        searchedProducts: [],
        products: []
      }
    },
    methods: {
      takeQuery: function (event) {
        event.preventDefault()
        this.$emit('newSearch', this.searchText)
      },
      search: async () => {
        const response = await axios.get(values.ip + "/api/history")
        return response.data
      },
      searchByHistory: async function () {
        const response = await axios.get(values.ip + "/api/history/search")
        this.products = response.data.data
      },
      newSearch: function (event, query) {
        event.preventDefault()
        this.drawer = false
        this.$router.push({
          path: '/search',
          query: {
            search: query
          }
        })
      },
      goToProductDet(event, link) {
        event.preventDefault()
        this.drawer = false
        this.$router.push({
          path: '/detail',
          query: {
            link: link
          }
        })
      },
      goToHome: function () {
        this.$router.push({
          path: '/'
        });
        this.drawer = false;
        this.searchText = '';
      },
      goToAnalysis: function () {
        this.$router.push({
          path: '/analysis'
        });
        this.drawer = false;
        this.searchText = '';
      }
    },
    mounted() {
      this.search().then((response) => {
        this.searchedQueries = response.searchQueries.slice(0, 10)
        this.searchedProducts = response.searchedProducts.slice(0, 10)
      })

      this.searchByHistory()
    },
  }
</script>

<style>

</style>