import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-vendor-graph1',
  templateUrl: './vendor-graph1.component.html',
  styleUrls: ['./vendor-graph1.component.css']
})
export class VendorGraph1Component implements OnInit {

  @ViewChild('donut') donut: ElementRef;
  donutCtx: any;
  myChart: any;

  constructor(private ProjectService: ProjectService) {

  }

  ngOnInit() {
    this.ProjectService.allTendors();
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
