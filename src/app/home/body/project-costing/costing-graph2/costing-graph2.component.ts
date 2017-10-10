import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-costing-graph2',
  templateUrl: './costing-graph2.component.html',
  styleUrls: ['./costing-graph2.component.css']
})

export class CostingGraph2Component implements OnInit {

  @ViewChild('donut') donut: ElementRef;
  donutCtx: any;
  myChart: any;
  label1 :any =  [];
  i  = 0;
  est_cost : any=[];
  act_cost : any=[];
  labels : any=[];
  y_max_val : any;
  y_min_val : any;

  constructor(private ProjectService: ProjectService) {

    this.ProjectService.emitCostGraph1Data.subscribe((res)=>{
       console.log(res);
       this.act_cost = res.actual_cost;
       this.est_cost = res.target_cost;
       this.labels = res.labels;
       this.y_max_val = res.maxcost;
       this.y_min_val = res.mincost;

       this.getGraph();
    });
  }

  ngOnInit() {
  }

  getGraph() {

    this.donutCtx = this.donut.nativeElement.getContext('2d');

     this.myChart = new Chart(this.donutCtx, {
        type: 'line',
        data: {
				labels: this.labels,
				datasets: [{
					label: "Actual Cost",
					backgroundColor: '#3f51b5',
					borderColor: '#3f51b5',
					fill: false,
					data: this.act_cost,

				}, {
					label: "Estimated Cost",
					backgroundColor:'#ff6384',
					borderColor: '#ff6384',
					fill: false,
					data: this.est_cost,

				},]
			},
      options: {
              title:{
                display:true,
                text:'Costing Component'
              },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,

          },
          ticks: {
            autoSkip: false,
            maxRotation: 75,
            minRotation: 0
          }
          }],
          yAxes: [{
          display: true,
          ticks: {

            max: this.y_max_val,


          }
          }]
      },
    }
    });

  }
}
