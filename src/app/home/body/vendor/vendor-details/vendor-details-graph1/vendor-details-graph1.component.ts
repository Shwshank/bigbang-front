import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ProjectService } from '../../../../../service/projectservice';

@Component({
  selector: 'app-vendor-details-graph1',
  templateUrl: './vendor-details-graph1.component.html',
  styleUrls: ['./vendor-details-graph1.component.css']
})

export class VendorDetailsGraph1Component implements OnInit {


    @ViewChild('donut') donut: ElementRef;
    donutCtx: any;
    myChart: any;
    est_cost: any;
    act_cost: any;
    labels: any;

    constructor(private ProjectService: ProjectService) {

      this.ProjectService.emitact_cost01.subscribe((res0)=>{

        this.ProjectService.emitest_cost01.subscribe((res1)=>{

          this.ProjectService.emitlabels01.subscribe((res2)=>{

            this.est_cost = res0.actual_cost;
            this.act_cost = res0.target_cost;
            this.labels = res2;
            console.log(this.est_cost);
            console.log(this.act_cost);
            this.getGraph();
          })

        });

      });

    }

    ngOnInit() {

    }

    getGraph() {

      this.donutCtx = this.donut.nativeElement.getContext('2d');

       this.myChart = new Chart(this.donutCtx, {
          type: 'bar',
          data: {
             labels: this.labels,
             datasets: [{
                 label: "Estimated cost",
                 backgroundColor:  '#ff6384',
                 borderColor: '#ff6384',
                 data: this.est_cost,
                 fill: false,
                 pointHoverRadius: 8,
                 pointRadius: 5,
                 showLine: false // no line shown
             },
             {
                 label: "Actual cost",
                 backgroundColor:  '#3f51b5',
                 borderColor: '#3f51b5',
                 data: this.act_cost,
                 fill: false,
                 pointHoverRadius: 8,
                 pointRadius: 5,
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
                      pointRadius: [0,0],
                       pointStyle: 'triangle',

                   }
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
                   display: true,
                   ticks: {

                     //max: this.y_max_va,

                   }
                   }]
               },
           }
      });
    }


}
