import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-costing-graph1',
  templateUrl: './costing-graph1.component.html',
  styleUrls: ['./costing-graph1.component.css']
})

export class CostingGraph1Component implements OnInit {

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
        type: 'line',
        data: {
           labels: [
           "label1",
           "label2",
           "label3",
           "label4",],
           datasets: [{
               label: "My First dataset",
               backgroundColor:  '#ff6384',
               borderColor: '#ff6384',
               data: [{
                 x: 1,
                 y: 1
               },
               {
                 x: 5,
                 y: 13
               },
               {
                 x: 6,
                 y: 55
               },
               {
                 x: 8,
                 y: 85
               },],
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
                 text:'Point Style: 1'
             },
             legend: {
                 display: false
             },
             elements: {
                 point: {
                     pointStyle: 'triangle'
                 }
             }
         }
    });
  }
}
