import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../../service/projectservice';

@Component({
  selector: 'app-new-cost-componet-box',
  templateUrl: './new-cost-componet-box.component.html',
  styleUrls: ['./new-cost-componet-box.component.css']
})
export class NewCostComponetBoxComponent implements OnInit {

  inputArray: any = [];
  ccname: any;
  ccdesc: any;
  estcost: any;

  constructor(private ProjectService: ProjectService) {

    this.inputArray.push({labelData : '', costData: '', dateData: '' });
  }

  ngOnInit() {
    this.ccname = localStorage.getItem('ccname');
    this.ccdesc = localStorage.getItem('ccdesc');
    this.estcost = localStorage.getItem('estcost');

  }

  addCosting() {
    this.inputArray.push({labelData : '', costData: '', dateData: ''});
  }

  removeCosting(i: any) {
    this.inputArray.splice(i,1);
  }

  saveCostingComponentData() {
    console.log(this.inputArray);
    this.ProjectService.pushNewCostComponent(this.estcost,this.ccname,this.ccdesc,this.inputArray);

  }

  discard() {

    this.ProjectService.newCostComponent({status:false});
  }

}
