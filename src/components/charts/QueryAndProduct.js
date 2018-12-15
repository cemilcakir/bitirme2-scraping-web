import { Pie } from 'vue-chartjs';

export default {
   extends: Pie,
   props: ["data"],
   data() {
      return {
         datacollection: {
            labels: [],
            datasets: [{
               label: 'Aranan Ürünler',
               backgroundColor: '#4DB6AC',
               pointBackgroundColor: 'white',
               borderWidth: 1,
               pointBorderColor: '#3a3b3c',
               data: []
            }]
         },
         options: {
            scales: {
               yAxes: [{
                  ticks: {
                     beginAtZero: true
                  },
                  gridLines: {
                     display: true
                  }
               }],
               xAxes: [{
                  gridLines: {
                     display: false
                  }
               }]
            },
            legend: {
               display: true
            },
            responsive: true,
            maintainAspectRatio: false
         }
      }
   },
   mounted() {
      setTimeout(() => {
         var labels = []
         var counts = []

         for(var query of this.data) {
            if(query.query) {
               labels.push(query.query)
               counts.push(query.count)
            }
            else if(query.product) {
               labels.push(query.product)
               counts.push(query.count)
            }
         }

         this.datacollection.labels = labels
         this.datacollection.datasets[0].data = counts
         
         
         this.renderChart(this.datacollection, this.options)
      }, 1500);
   },
   watch: {
      data: function(datas) {
         var labels = []
         var counts = []

         for(var query of datas) {
            if(query.query) {
               labels.push(query.query)
               counts.push(query.count)
            }
            else if(query.product) {
               labels.push(query.product)
               counts.push(query.count)
            }
         }

         this.datacollection.labels = labels
         this.datacollection.datasets[0].data = counts
         
         
         this.renderChart(this.datacollection, this.options)
      }
   }
}