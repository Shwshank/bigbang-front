import { Component, OnInit } from '@angular/core';
// import './sunBrust.js';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-summary-graph2',
  templateUrl: './summary-graph2.component.html',
  styleUrls: ['./summary-graph2.component.css']
})
export class SummaryGraph2Component implements OnInit {

  inputArray: any = [];
  ccname: any;
  ccdesc: any;
  estcost: any;

  constructor(private ProjectService: ProjectService) {

    this.inputArray.push({location : '', size: '', cost: ''});
  }

  ngOnInit() {
  }

  addLocation() {
    this.inputArray.push({location : '', size: '', cost: ''});
  }

  removeLocation(i: any) {
    this.inputArray.splice(i,1);
  }

  saveLocation() {
    //localStorage.setItem('location', JSON.stringify(this.inputArray));

    console.log(this.inputArray);
    this.ProjectService.addMapData(this.inputArray);

    // let mapData = [
    //   ['City',   'Population', 'Area'],
    //   ['delhi',      12,    1285.31],
    //   ['goa',      2,    285.31],
    // ];

    //localStorage.setItem('mapData',JSON.stringify(mapData));
    // window.location.reload();

  }

  discard() {

  }

}
