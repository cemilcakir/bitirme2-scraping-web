<template>
  <nav>
    <v-toolbar flat absolute color="teal lighten-3" dark scroll-off-screen scroll-target="#scrolling-techniques">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="headline white--text">
        <span>Bitirme 2 </span>
        <span class="font-weight-light">Web Scraping</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field label="Arama" prepend-icon="search" clearable></v-text-field>

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
              <v-list-tile-title class="white--text">Anasayfa</v-list-tile-title>
            </v-list-tile>
            <v-list-group prepend-icon="history" value="true">
              <v-list-tile slot="activator">
                <v-list-tile-title class="white--text">Geçmiş</v-list-tile-title>
              </v-list-tile>

              <v-list-group no-action sub-group value="true">
                <v-list-tile slot="activator">
                  <v-list-tile-title class="white--text">Aranan Kelimeler</v-list-tile-title>
                </v-list-tile>
              </v-list-group>

              <v-list-group sub-group no-action>
                <v-list-tile slot="activator">
                  <v-list-tile-title class="white--text">Bakılan Ürünler</v-list-tile-title>
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
  export default {
    data() {
      return {
        drawer: false
      }
    }
  }
</script>

<style>

</style>
