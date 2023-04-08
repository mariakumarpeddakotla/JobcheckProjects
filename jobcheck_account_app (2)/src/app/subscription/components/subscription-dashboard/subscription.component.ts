import { Component } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {


  public chart:any;
  ngOnInit():void{
    this.createChart();
  }
  createChart(){

    const myChart = new Chart("Subscription", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }],
  
      },
      options: {
       plugins:{
        legend:{
          position:'bottom'
        }
       }
      },
     
    });
    
  }

  
   // line chart
   data = {
    labels: ['2015', '2016', '2017',
             '2018', '2019'],
    datasets: [
        {
            label: 'Total Profile Downloads',
            data: [375, 450, 300, 500, 440],
            fill: false,
            
            borderColor: '#0175A2'
        },
        {
            label: 'Total Job Downloads',
            data: [600, 510, 620, 380, 620, 610],
            fill: false,
            borderColor: '#12B76A',
            
            
        },
        {
          label: 'Total Mails Sent',
          data: [810, 630, 640, 610, 250],
          fill: false,
          borderColor: '#9747FF',
        
          
      }
    ]
};
chartOptions = {
    plugins: {
        legend: {
          position:'bottom',
           
        }
    }
};
}
