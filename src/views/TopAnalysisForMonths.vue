<template>
    <v-content class="grey lighten-2">
         <v-combobox
          v-model="selected"
          :items="months"
          label="Aya göre arama istatistikleri için bir ay seçiniz."
        ></v-combobox>
        <Top v-bind:labels="labels" v-bind:counts="counts" v-if="labels.length != 0"/>  
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
                labels: [],
                counts: [],
                months: [{
                    text: "Ocak",
                    value: "01"
                },{
                    text: "Şubat",
                    value: "02"
                },{
                    text: "Mart",
                    value: "03"
                },{
                    text: "Nisan",
                    value: "04"
                },{
                    text: "Mayıs",
                    value: "05"
                },{
                    text: "Haziran",
                    value: "06"
                },{
                    text: "Temmuz",
                    value: "07"
                },{
                    text: "Ağustos",
                    value: "08"
                },{
                    text: "Eylül",
                    value: "09"
                },{
                    text: "Ekim",
                    value: "10"
                },{
                    text: "Kasım",
                    value: "11"
                },{
                    text: "Aralık",
                    value: "12"
                }],
                selected: "Seçiniz"
            }
        },
        watch: {
            selected: async function(month) {
                this.labels = []
                this.counts = []
                const response = await axios.get(values.ip + "/api/history/months/" + month.value + "/queries")
                this.labels = response.data.labels
                this.counts = response.data.data
            }
        }
    }
</script>