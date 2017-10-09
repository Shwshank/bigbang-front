import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-costing-graph3',
  templateUrl: './costing-graph3.component.html',
  styleUrls: ['./costing-graph3.component.css']
})

export class CostingGraph3Component implements OnInit {

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

               backgroundColor:  '#3f51b5',
               borderColor: '#3f51b5',
               data: [34, 33, 175, 130, 27, 55, 60],
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
