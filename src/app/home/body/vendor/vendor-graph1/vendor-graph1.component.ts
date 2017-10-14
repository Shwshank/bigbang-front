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
  act_cost: any;
  est_cost: any;
  labels: any;
  emptyData: any;

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitMainVendorGraph1.subscribe((res)=>{
      console.log(res);

      if(res.success == false) {
        this.emptyData = true;
        this.act_cost = [];
        this.est_cost = [];
        this.labels =  [] ;

      } else {
        this.emptyData = false;
        this.act_cost = res.actual_cost;
        this.est_cost = res.target_cost;
        this.labels =  res.vendor_names ;

      }
      this.getGraph();
    });
  }

  ngOnInit() {
    this.ProjectService.vendorMainBarChart();
    this.ProjectService.allTendors();

  }

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
