import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../../service/projectservice';

@Component({
  selector: 'app-all-costing-component',
  templateUrl: './all-costing-component.component.html',
  styleUrls: ['./all-costing-component.component.css']
})
export class AllCostingComponentComponent implements OnInit {

  costComponents :any = [];


  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitAllCostComponents.subscribe((res)=>{
      // console.log(res);
      this.costComponents = res;
    });
   }

  ngOnInit() {
    this.ProjectService.CostComponet();
  }



}
