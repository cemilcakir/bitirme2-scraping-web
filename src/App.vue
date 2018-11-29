<template>
  <v-app>
    <v-content>
      <Header />
       <v-container grid-list-md fluid>
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
  data () {
    return {
      //
    }
  }
}
</script>
