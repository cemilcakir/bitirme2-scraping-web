<template>
  <v-app>
    <v-content>
      <Header v-on:newSearch="newSearch($event)" />
      <v-container grid-list-md fluid class="grey lighten-2 ">
        <router-view class="mt-5"></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    methods: {
      newSearch: function (searchText) {
        this.$router.push({
          path: '/search',
          query: {
            search: searchText
          }
        })
      }
    }
  }
</script>