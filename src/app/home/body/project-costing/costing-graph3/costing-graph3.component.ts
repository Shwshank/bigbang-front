import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-costing-graph3',
  templateUrl: './costing-graph3.component.html',
  styleUrls: ['./costing-graph3.component.css']
})

export class CostingGraph3Component implements OnInit {

  @ViewChild('donut') donut: ElementRef;
  donutCtx: any;
  myChart: any;
  act_cost: any;
  est_cost: any;
  labels: any;

  constructor(private ProjectService: ProjectService) {

    this.ProjectService.emitCostGraph1Data.subscribe((res)=>{

       this.act_cost = res.child_costs.actual_cost;
       this.est_cost = res.child_costs.target_cost;
       this.labels = res.child_costs.labels;

       this.getGraph();
    });

  }

  ngOnInit() {}

  getGraph() {

    this.donutCtx = this.donut.nativeElement.getContext('2d');

     this.myChart = new Chart(this.donutCtx, {
        type: 'bar',
        data: {
           labels: this.labels,
           datasets: [{

               label: "Actual cost",
               backgroundColor:  '#3f51b5',
               borderColor: '#3f51b5',
               data: this.act_cost,
               fill: false,
               pointRadius: 10,
               pointHoverRadius: 15,
               showLine: false // no line shown
           },
           {
               label: "Estimated cost",
               backgroundColor:  '#ff6384',
               borderColor: '#ff6384',
               data: this.est_cost,
               fill: false,
               pointRadius: 10,
               pointHoverRadius: 15,
               showLine: false // no line shown
           }]
        },
        options: {
             responsive: true,
             title:{
                 display:true,
                 text:'Sub Project Costing'
             },
             legend: {
                 display: true
             },
             elements: {
                 point: {
                     pointStyle: 'circle'
                 }
             },

         }
    });
  }

  fun() {
    console.log('fun');
  }
}
