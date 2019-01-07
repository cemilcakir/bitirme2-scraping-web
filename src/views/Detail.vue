<template>
  <v-content>

    <v-carousel height="25%">
      <v-carousel-item v-for="img in detail.images" :key="img" :src="img" reverse-transition="fade" transition="fade"></v-carousel-item>
    </v-carousel>

    <v-list subheader class="grey lighten-2">
      <v-subheader>Ürün Detayı</v-subheader>

      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="det in detail.details" :key="det.title">

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ det.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ det.value }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-flex>
      </v-layout>
    </v-list>

  </v-content>
</template>

<script>
  import axios from 'axios'
  import values from '../../Values.js'

  export default {
    data() {
      return {
        detail: {}
      }
    },
    mounted: async function () {
      const link = this.$route.query.link
      const response = await axios.get(values.ip + "/api/search/detail?url=" + link)
      this.detail = response.data
    }
  }
</script>