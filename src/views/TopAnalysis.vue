<template>
    <v-content class="grey lighten-2">
        <Top v-bind:labels="labelsQuery" v-bind:counts="countsQuery"/>
        <br>
        <br>
        <Top v-bind:labels="labelsProduct" v-bind:counts="countsProduct"/>     
    </v-content>
</template>

<script>
    import axios from 'axios'
    import values from '../../Values.js'
    import Top from '../components/charts/Top.js'

    export default {
        components: {
            Top
        },
        data() {
            return {
                labelsQuery: [],
                countsQuery: [],
                labelsProduct: [],
                countsProduct: []
            }
        },
        mounted: async function () {
            const response = await axios.get(values.ip + "/api/history/without-filter")
            for(var query of response.data.topQueries) {
                this.labelsQuery.push(query._id)
                this.countsQuery.push(query.count)
            }

             for(var product of response.data.topProducts) {
                this.labelsProduct.push(product._id)
                this.countsProduct.push(product.count)
            }
         }
    }
</script>