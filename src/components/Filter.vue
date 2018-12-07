<template>
  <div class="text-xs-center right">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
      <v-btn slot="activator" icon>
        <v-icon>filter_list</v-icon>
      </v-btn>
      <v-card>
        <v-list-tile avatar v-for="item in items" v-bind:key="item.filter">
          <v-list-tile-action>
              <v-switch v-model="filters" :value="item.filter"></v-switch>
            </v-list-tile-action>
          
          <v-list-tile-title>
            <v-list-tile-sub-title>{{ item.title }}</v-list-tile-sub-title>
          </v-list-tile-title>
        </v-list-tile>

        <v-card-actions>
          <v-btn flat color="red darken-4" @click="clearFilters"> Temizle </v-btn>
          <v-btn flat color="green" @click="filter">Filtrele </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
  export default {
     data () {
      return {
        filters: [],
        items: [
          {filter: 'up', title: 'Fiyata Göre Artan'},
          {filter: 'down', title: 'Fiyata Göre Azalan'},
          {filter: 'hepsiburada', title: 'hepsiburada'},
          {filter: 'n11', title: 'n11'},
          {filter: 'teknosa', title: 'teknosa'},
          {filter: 'kitapyurdu', title: 'kitapyurdu'}
        ],
        menu: false
      }
    },
    methods: {
      filter: function() {
        this.$emit('filter', this.filters)
        this.menu = false
      },
      clearFilters: function() {
        this.filters = []
        this.$emit('filter', this.filters)
        this.menu = false
      }
    },
     watch: {
      filters: function (filter) {
        if(filter.includes("up") && filter.includes("down")) {
          if(filter.indexOf("up") < filter.indexOf("down"))
            delete filter[filter.indexOf("up")]
          else
            delete filter[filter.indexOf("down")]
        }
      }
   }
  }
</script>