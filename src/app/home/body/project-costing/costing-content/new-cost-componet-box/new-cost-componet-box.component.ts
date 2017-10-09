import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cost-componet-box',
  templateUrl: './new-cost-componet-box.component.html',
  styleUrls: ['./new-cost-componet-box.component.css']
})
export class NewCostComponetBoxComponent implements OnInit {

  inputArray: any = [];

  constructor() {
    this.inputArray.push({label:'Label', cost:'Cost', date:'Date', labelData : '', costData: '', dateData: '' });
  }

  ngOnInit() {
  }

  addCosting() {
    this.inputArray.push({label:'Label', cost:'Cost', date:'Date', labelData : '', costData: '', dateData: ''});
  }

  removeCosting(i: any) {
    this.inputArray.splice(i,1);
  }



}
