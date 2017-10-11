import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-vendor-details-graph1',
  templateUrl: './vendor-details-graph1.component.html',
  styleUrls: ['./vendor-details-graph1.component.css']
})

export class VendorDetailsGraph1Component implements OnInit {


    @ViewChild('donut') donut: ElementRef;
    donutCtx: any;
    myChart: any;

    constructor() { }

    ngOnInit() {
      this.getGraph();
    }

    getGraph() {

      this.donutCtx = this.donut.nativeElement.getContext('2d');

       this.myChart = new Chart(this.donutCtx, {
          type: 'doughnut',
          data: {
             labels: ["January", "February", "March", "April", "May", "June", ],
             datasets: [{
               data: [34, 33, 175, 130, 27, 55],
               backgroundColor: ['#ff6384', '#1f6384', '#2f6384', '#3f6384', '#4f6384', '#3f51b5'],
               label: 'Vendor'
             }],

          },
          options: {
               responsive: true,
               cutoutPercentage: 70,
           }
      });
    }

}
