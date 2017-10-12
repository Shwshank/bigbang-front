import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/projectservice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-tendor',
  templateUrl: './new-tendor.component.html',
  styleUrls: ['./new-tendor.component.css']
})
export class NewTendorComponent implements OnInit {

  t_name: any;
  t_desc: any;
  vendor_id: any = null;
  t_act_cost: any;
  t_est_cost: any;
  t_data: any;
  vendors: any=[];
  formData: any;

  constructor(private ProjectService: ProjectService) {

    this.ProjectService.emitvendor.subscribe((res)=>{
       this.vendors = res.vendors ;
    });

  }

  ngOnInit() {
    this.ProjectService.getAllVendor();
  }

  saveNewTendor() {
    // {'tendor_name': 'tendor 3', 'tendor_desc': 'desc of tendor3', 'vendor_id':'123', 't_est_cost':110000, 't_act_cost':120000}
    // this.t_data = {'tendor_name': this.t_name ,'tendor_desc': this.t_desc,'vendor_id': this.vendor_id,'t_est_cost':  this.t_est_cost,'t_act_cost': this.t_act_cost};
    // this.ProjectService.updateTendor(this.t_data);
    this.formData = new FormData();
    this.formData.append('tendor_name', this.t_name);
    this.formData.append('tendor_desc', this.t_desc);
    this.formData.append('vendor_id', this.vendor_id);
    this.formData.append('t_est_cost', this.t_est_cost);
    this.formData.append('t_act_cost', this.t_act_cost);

    this.ProjectService.AddTendor(this.formData);
    this.ProjectService.callNewTendorComponent(false);
  }
  Cancel() {
    this.ProjectService.callNewTendorComponent(false);
  }
}
