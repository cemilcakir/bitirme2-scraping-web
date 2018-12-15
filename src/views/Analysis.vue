<template>
    <v-content class="grey lighten-2">
        <Province v-bind:labels="cities" v-bind:counts="counts"/>
        <v-spacer></v-spacer>
         <v-combobox
          v-model="selected"
          :items="cities"
          label="İle göre arama istatistikleri için bir il seçiniz."
        ></v-combobox>
        <v-spacer></v-spacer>
        <QueryAndProduct v-bind:data="queries" v-if="queries.length != 0"/>
        <v-spacer></v-spacer>
        <QueryAndProduct v-bind:data="products" v-if="products.length != 0"/>
    </v-content>
</template>

<script>
    import axios from 'axios'
    import values from '../../Values.js'
    import QueryAndProduct from '../components/charts/QueryAndProduct.js'
    import Province from '../components/charts/Province.js'

    export default {
        components: {
            QueryAndProduct,
            Province
        },
        data() {
            return {
                cities: [],
                counts: [],
                selected: "Seçiniz",
                queries: [],
                products: []
            }
        },
        mounted: async function () {
            const response = await axios.get(values.ip + "/api/history/cities")
            this.cities = response.data.cities
            this.counts = response.data.requestCounts
        },
        watch: {
            selected: async function(city) {
                const response = await axios.get(values.ip + "/api/history/cities/" + city)
                this.queries = response.data.queries
                this.products = response.data.products
            }
        }
    }
</script>