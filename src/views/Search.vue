<template>
  <div>
    <div class="text-xs-center mb-2">
      <v-chip label class="teal darken-1 white--text">Aradığınız ürünler aşağıdadır.</v-chip>
    </div>
    <List v-bind:products="result" />
  </div>
</template>

<script>
  import List from '../components/List'
  import axios from 'axios'
  import values from '../../Values.js'

  export default {
    components: {
      List
    },
    data() {
      return {
        result: []
      }
    },
    methods: {
      search: async (searchText) => {
        const response = await axios.get(values.ip + "/api/search?q=" + searchText)
        return response.data.response
      }
    },
    mounted() {
      let query = this.$route.query.search;
      this.search(query).then((response) => {  
          this.result = response
      })
    },
    watch: {
      '$route'(to, from) {
        let query = to.query.search
        this.search(query).then((response) => {
          this.result = response
        })
      }
    }
  }
</script>