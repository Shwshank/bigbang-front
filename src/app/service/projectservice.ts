import { EventEmitter, Injectable, } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MdSnackBar} from '@angular/material';

import { APIService } from './APIservice';

@Injectable()
export class ProjectService {

  constructor(private APIService: APIService, private snackBar: MdSnackBar) {}

  emmitProjectSummary :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputData :  EventEmitter<any> = new EventEmitter<any>();        // emmits input JSON data from dialog to form component
  emmitInputDataTab1 :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputDataTab2 :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputDataTab3 :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputDataTab4 :  EventEmitter<any> = new EventEmitter<any>();
  emmitInputDataTab5 :  EventEmitter<any> = new EventEmitter<any>();

  emmitTab1Clicked : EventEmitter<any> = new EventEmitter<any>();
  emmitTab2Clicked : EventEmitter<any> = new EventEmitter<any>();
  emmitTab3Clicked : EventEmitter<any> = new EventEmitter<any>();
  emmitTab4Clicked : EventEmitter<any> = new EventEmitter<any>();
  emmitTab5Clicked : EventEmitter<any> = new EventEmitter<any>();

  emitNewCostComponent : EventEmitter<any> = new EventEmitter<any>();

  emitAllCostComponents : EventEmitter<any> = new EventEmitter<any>();
  emitCostGraph1Data : EventEmitter<any> = new EventEmitter<any>();
  callNewTendor: EventEmitter<any> = new EventEmitter<any>();
  emitvendor: EventEmitter<any> = new EventEmitter<any>();
  emittendor: EventEmitter<any> = new EventEmitter<any>();
  emitAllTendor: EventEmitter<any> = new EventEmitter<any>();

  emitact_cost01 : EventEmitter<any> = new EventEmitter<any>();
  emitest_cost01 : EventEmitter<any> = new EventEmitter<any>();
  emitlabels01 : EventEmitter<any> = new EventEmitter<any>();
  emitvendorData : EventEmitter<any> = new EventEmitter<any>();

  data1 : any = [
    {name: 'cc1', desc:'complete desc1', data : [{labelData : 'label 1', costData: '12', dateData: '10/10/2017'},{labelData : 'label 2', costData: '22', dateData: '11/10/2017'},
    {labelData : 'label 3', costData: '62', dateData: '12/10/2017'},{labelData : 'label 4', costData: '122', dateData: '13/10/2017'}]},
    {name: 'cc2', desc:'complete desc2', data : [{labelData : 'labeel 1', costData: '22', dateData: '10/10/2017'},{labelData : 'labeel 2', costData: '22', dateData: '11/10/2017'},
    {labelData : 'labeel 3', costData: '72', dateData: '12/10/2017'},{labelData : 'labeel 4', costData: '82', dateData: '13/10/2017'}]},
  ];

  temp: any;
  act_cost01 : any;
  est_cost01 : any;
  labels01 : any;
  vendorData : any;

    CostComponet() {
        this.APIService.GetAllCostingComponent().subscribe((res)=>{
          // console.log(res);
          this.emitAllCostComponents.emit(res.charts); // dynamic data
          this.emitCostGraph1Data.emit(res);
      });
      // this.emitAllCostComponents.emit(this.data1); // local data
    }

  vendor : any = [];
  tendor : any = [];

  emitact_cost01fun() {
    this.emitact_cost01.emit(this.act_cost01);
  }

  emitest_cost01fun() {
    this.emitest_cost01.emit(this.est_cost01);
  }

  emitlabels01fun() {
    this.emitlabels01.emit(this.labels01);
  }

  emitvendorDatafun() {
    this.emitvendor.emit(this.vendorData);
  }


  allTendorsByVendorID: any = [];



  newCostComponent(data: any) {
      this.emitNewCostComponent.emit(data);

  }

  emitAllTendorFun() {
    this.emitAllTendor.emit(this.allTendorsByVendorID);
  }

  pushNewCostComponent(estcost:any, name:any, desc: any, data:any) {
    //console.log(data);
    this.APIService.AddNewCostingComponent(estcost, name, desc, data).subscribe((res)=>{
        console.log(res);
        this.CostComponet();
        this.newCostComponent({status: false}); // to hide the add costing box

    });
    this.data1.push({name:name, desc: desc, data:data});
    //console.log(this.data1);
  }

  deleteCostComponent(id: any) {
    console.log(id);
    this.APIService.DeleteCostingComponent(id).subscribe((res)=>{
      console.log(res);
      this.CostComponet();
    });
  }

  addFile(data : any) {
    console.log(data);
    this.APIService.AddFile(data).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

  addFolder( data: any ) {
    console.log(data);
    this.APIService.AddFolder(data).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

  callNewTendorComponent(res) {
    this.callNewTendor.emit(res);
  }

  allVendors() {
    this.emitvendor.emit(this.vendor);
  }

  allTendors() {
    this.emittendor.emit(this.tendor);
  }

  updateTendor(t_data) {
    this.tendor.push(t_data);
    this.allTendors();
  }

  newVendor(v_name, v_desc) {
    let formData = new FormData();
    formData.append('vendor_name',v_name);
    formData.append('vendor_desc',v_desc);
    this.APIService.AddVendor(formData).subscribe((res)=>{
      console.log(res);
    });
  }

  getAllVendor() {

    this.APIService.GetVendor().subscribe((res)=>{
      this.vendor = res;
      this.allVendors();
    },(err) => {
      console.log(err);
    });
  }

  AddTendor(data) {

    this.APIService.AddTendor(data).subscribe((res)=>{
      // console.log(res);
      this.tendor  = res.tendors;
      this.allTendors();
    });

  }

  getAllTendor() {
    let formData = new FormData();
    this.APIService.GetTendor(formData).subscribe((res)=>{
      // console.log(res);
      this.tendor  = res.tendors;
      this.allTendors();

    },(err) => {
      console.log(err);
    });
  }

  getAllTendorWithVendorId(data) {

    this.APIService.GetAllTendorsWithVendorId(data).subscribe( (res)=>{
      // console.log(res);

      this.act_cost01 = res;
      this.est_cost01 = res.target_cost;
      this.labels01 = res.labels;
      this.vendorData = res.vendor;
      this.allTendorsByVendorID = res.vendor.tendors;

      this.emitAllTendorFun();
      this.emitact_cost01fun();
      this.emitest_cost01fun();
      this.emitlabels01fun();
      this.emitvendorDatafun();

    });
  }

  getMapData() {
    
    this.APIService.GetMapData().subscribe((res)=>{
      console.log(res);

    });
  }

}
