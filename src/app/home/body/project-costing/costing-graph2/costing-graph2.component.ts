import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-costing-graph2',
  templateUrl: './costing-graph2.component.html',
  styleUrls: ['./costing-graph2.component.css']
})

export class CostingGraph2Component implements OnInit {

  @ViewChild('donut') donut: ElementRef;
  donutCtx: any;
  myChart: any;
  label1 :any =  [];
  i  = 0;
  data : any=[];

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.CostComponet();
  }

  ngOnInit() {

    this.ProjectService.emitAllCostComponents.subscribe((res)=>{
       //console.log(res);

      for (let set of res) {
         // console.log(set);
        //  console.log(this.i++);

          for(let lot of set.data) {
            //console.log(lot.costData);
            this.data.push(lot.costData);

          }

      }
      // console.log(this.data);


    });

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
          "label5"

				],
				datasets: [{
					label: "My First dataset",
					backgroundColor: '#ff6384',
					borderColor: '#ff6384',
					fill: false,
					data: [1, 10, 55, 88 ,111, ],
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
