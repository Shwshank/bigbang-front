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
  emptyGraph: any = false;

  constructor(private ProjectService: ProjectService) {
  }

  ngOnInit() {
    this.ProjectService.emitCostGraph1Data.subscribe((res)=>{
      // console.log(res);
      if(res.success == false) {
        this.emptyGraph = true;
        this.act_cost = [];
        this.est_cost = [];
        this.labels = [];
        this.y_max_val = 100;
        this.y_min_val = 0;

      } else {
        this.emptyGraph = false;
        this.act_cost = res.actual_cost;
        this.est_cost = res.target_cost;
        this.labels = res.labels;
        this.y_max_val = res.maxcost;
        this.y_min_val = res.mincost;
      }
        this.getGraph();


    });
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
              legend: {
                display: true,
              },

              title:{
                display:true,
                text:'Costing Component current project'
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
            minRotation: 0,
            min: 0,
          }
          }],
          yAxes: [{
          afterTickToLabelConversion: function(scaleInstance) {
          // set the first and last tick to null so it does not display
          // note, ticks[0] is the last tick and ticks[length - 1] is the first
          scaleInstance.ticks[0] = null;
          scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;

          // need to do the same thing for this similiar array which is used internally
          scaleInstance.ticksAsNumbers[0] = null;
          scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
        },
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
