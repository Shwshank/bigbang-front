import { EventEmitter, Injectable, } from '@angular/core';
import { APIService } from './APIservice';
import { NgForm } from '@angular/forms';

@Injectable()
export class ProjectService {

  constructor(private APIService: APIService) {}

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

  data1 : any = [
    {name: 'cc1', desc:'complete desc1', data : [{labelData : 'label 1', costData: '12', dateData: '10/10/2017'},{labelData : 'label 2', costData: '22', dateData: '11/10/2017'},
    {labelData : 'label 3', costData: '62', dateData: '12/10/2017'},{labelData : 'label 4', costData: '122', dateData: '13/10/2017'}]},
    {name: 'cc2', desc:'complete desc2', data : [{labelData : 'labeel 1', costData: '22', dateData: '10/10/2017'},{labelData : 'labeel 2', costData: '22', dateData: '11/10/2017'},
    {labelData : 'labeel 3', costData: '72', dateData: '12/10/2017'},{labelData : 'labeel 4', costData: '82', dateData: '13/10/2017'}]},
  ];

  temp: any;

    CostComponet() {
        this.APIService.GetAllCostingComponent().subscribe((res)=>{
          // console.log(res);
          this.emitAllCostComponents.emit(res.charts); // dynamic data
          this.emitCostGraph1Data.emit(res);
      });
      // this.emitAllCostComponents.emit(this.data1); // local data
    }

  vendor : any = [{'vendor_name':'vendor 1', 'vendor_id':'123'},
                  {'vendor_name':'vendor 2', 'vendor_id':'124'},
                  {'vendor_name':'vendor 3', 'vendor_id':'125'}];

  tendor : any = [{'tendor_name': 'tendor 1', 'tendor_desc': 'desc of tendor1', 'vendor_id':'123', 't_est_cost':100000, 't_act_cost':80000},
                  {'tendor_name': 'tendor 2', 'tendor_desc': 'desc of tendor2', 'vendor_id':'123', 't_est_cost':90000, 't_act_cost':80000},
                  {'tendor_name': 'tendor 3', 'tendor_desc': 'desc of tendor3', 'vendor_id':'123', 't_est_cost':110000, 't_act_cost':120000}];

  newCostComponent(data: any) {
      this.emitNewCostComponent.emit(data);

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
      console.log(res);
      this.tendor  = res.tendors;
      this.allTendors();
    });

  }

  getAllTendor() {
    let formData = new FormData();
    this.APIService.GetTendor(formData).subscribe((res)=>{
      console.log(res);
      this.tendor  = res.tendors;
      this.allTendors();

    },(err) => {
      console.log(err);
    });
  }


}
