import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-graph2',
  templateUrl: './cost-graph2.component.html',
  styleUrls: ['./cost-graph2.component.css']
})
export class CostGraph2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
