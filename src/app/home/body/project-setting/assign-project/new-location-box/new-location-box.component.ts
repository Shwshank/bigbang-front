import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-location-box',
  templateUrl: './new-location-box.component.html',
  styleUrls: ['./new-location-box.component.css']
})
export class NewLocationBoxComponent implements OnInit {

  inputArray: any = [];
  ccname: any;
  ccdesc: any;
  estcost: any;

  constructor() {

    this.inputArray.push({location : '', size: '', cost: ''});
  }

  ngOnInit() {
    localStorage.setItem('location',null);
  }

  addLocation() {
    this.inputArray.push({location : '', size: '', cost: ''});
  }

  removeLocation(i: any) {
    this.inputArray.splice(i,1);
  }

  saveLocation() {
    localStorage.setItem('location', JSON.stringify(this.inputArray));
    console.log(this.inputArray);
  }

  discard() {

  }

}
