<template>
  <v-content>

    <v-carousel height="400">
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

  export default {
    data() {
      return {
        detail: {}
      }
    },
    mounted: async function () {
      const link = this.$route.query.link
      //const response = await axios.get("http://localhost:3000/api/search/detail?url=" + link)
      this.detail = {
        "name": "Birlik Oyuncak Murat 124 Sesli ve Işıklı Metal Araba",
        "price": "29,25TL(/adet)",
        "images": ["https://productimages.hepsiburada.net/s/1/500/9534085005362.jpg",
          "https://productimages.hepsiburada.net/s/1/80/9534084972594.jpg",
          "https://productimages.hepsiburada.net/s/1/80/9534085005362.jpg",
          "https://productimages.hepsiburada.net/s/1/500/9534084972594.jpg",
          "https://productimages.hepsiburada.net/s/1/500/9534085005362.jpg"
        ],
        "details": [{
            "title": "Marka",
            "value": "Birlik Oyuncak"
          }, {
            "title": "Garanti Süresi (Ay)",
            "value": "12"
          }, {
            "title": "Yurt Dışı Satış",
            "value": "Yok"
          }, {
            "title": "Stok Kodu",
            "value": "HBV000002I3ND"
          },
          {
            "title": "Marka",
            "value": "Birlik Oyuncak"
          }, {
            "title": "Garanti Süresi (Ay)",
            "value": "12"
          }, {
            "title": "Yurt Dışı Satış",
            "value": "Yok"
          }, {
            "title": "Stok Kodu",
            "value": "HBV000002I3ND"
          }, {
            "title": "Marka",
            "value": "Birlik Oyuncak"
          }, {
            "title": "Garanti Süresi (Ay)",
            "value": "12"
          }, {
            "title": "Yurt Dışı Satış",
            "value": "Yok"
          }, {
            "title": "Stok Kodu",
            "value": "HBV000002I3ND"
          }
        ]
      }
    }
  }
</script>