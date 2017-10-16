import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ProjectService } from '../../../../service/projectservice';

@Component({
    selector: 'app-vendor-doughnut',
  templateUrl: './vendor-doughnut.component.html',
  styleUrls: ['./vendor-doughnut.component.css']
})
export class VendorDoughnutComponent implements OnInit {

  @ViewChild('donut1') donut: ElementRef;
  donutCtx: any;
  myChart: any;
  act_cost: any;
  est_cost: any;
  labels: any;
  emptyData: any;

  constructor() {  }

  ngOnInit() {
    this.getGraph();
  }

  getGraph() {

    this.donutCtx = this.donut.nativeElement.getContext('2d');

     this.myChart = new Chart(this.donutCtx, {
        type: 'bar',
        data: {
           labels: ['this.labels','12'],
           datasets: [{
               label: "Actual cost",
               backgroundColor:  '#3f51b5',
               borderColor: '#3f51b5',
               data: [12,21],
               fill: false,
               pointRadius: 10,
               pointHoverRadius: 15,
               showLine: false // no line shown
           },
           {
               label: "Estimated cost",
               backgroundColor:  '#ff6384',
               borderColor: '#ff6384',
               data: [21,12],
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
