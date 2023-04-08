import { Component } from '@angular/core';
import {Chart} from 'chart.js/auto' // import the library chart.js

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

public chart:any;
  ngOnInit():void{
    this.createChart();
  }
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [ 'Integration Pack','Job Post Pack','Resume Database Pack','Jobseeker Pack' ],
	       datasets: [{
    label: 'My First Dataset',
    backgroundColor: [
      'cyan',
      'orange',
      'red',
			'gray'
     		
    ],
    data: [25, 25, 25, 25],
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
 
 
       
 
}
