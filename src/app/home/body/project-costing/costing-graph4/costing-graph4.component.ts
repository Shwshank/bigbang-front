import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-costing-graph4',
  templateUrl: './costing-graph4.component.html',
  styleUrls: ['./costing-graph4.component.css']
})

export class CostingGraph4Component implements OnInit {

  @ViewChild('donut') donut: ElementRef;
  donutCtx: any;
  myChart: any;

  constructor() {

  }

  ngOnInit() {
    this.getGraph();
  }

  getGraph() {

    this.donutCtx = this.donut.nativeElement.getContext('2d');

     this.myChart = new Chart(this.donutCtx, {
        type: 'bar',
        data: {
           labels: ["January", "February", "March", "April", "May", "June", "July"],
           datasets: [{
               label: "My First dataset",
               backgroundColor:  '#3f51b5',
               borderColor: '#3f51b5',
               data: [34, 33, 175, 130, 27, 55, 60],
               fill: false,
               pointRadius: 10,
               pointHoverRadius: 15,
               showLine: false // no line shown
           },
           {
               label: "My First dataset",
               backgroundColor:  '#ff6384',
               borderColor: '#ff6384',
               data: [314, 332, 15, 13, 37, 55, 160],
               fill: false,
               pointRadius: 10,
               pointHoverRadius: 15,
               showLine: false // no line shown
           }
         ]
        },
        options: {
             responsive: true,
             title:{
                 display:true,
                 text:'Point Style: 1'
             },
             legend: {
                 display: false
             },
             elements: {
                 point: {
                     pointStyle: 'circle'
                 }
             }
         }
    });
  }
}
