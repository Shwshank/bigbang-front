import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-costing-graph2',
  templateUrl: './costing-graph2.component.html',
  styleUrls: ['./costing-graph2.component.css']
})

export class CostingGraph2Component implements OnInit {

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
				labels: [ // Date Objects
          "label1",
          "label2",
          "label3",
          "label4",
				],
				datasets: [{
					label: "My First dataset",
					backgroundColor: '#ff6384',
					borderColor: '#ff6384',
					fill: false,
					data: [
            {
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
            },
          ],
				}, {
					label: "My Second dataset",
					backgroundColor:'#3f51b5',
					borderColor: '#3f51b5',
					fill: false,
					data: [
            {
              x: 1,
              y: 5
            },
            {
              x: 5,
              y: 25
            },
            {
              x: 6,
              y: 35
            },
            {
              x: 8,
              y: 115
            },
          ],
				},]
			},
      options: {
              title:{
                display:true,
                text:'Costing Component'
              },
      scales: {

      },
    }
    });
  }
}
