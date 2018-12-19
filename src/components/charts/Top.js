import { HorizontalBar } from 'vue-chartjs';

export default {
   extends: HorizontalBar,
   props: ["labels", "counts"],
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
         this.datacollection.labels = this.labels
         this.datacollection.datasets[0].data = this.counts
         this.renderChart(this.datacollection, this.options)
      }, 1500);
   }
}