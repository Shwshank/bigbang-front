import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../service/projectservice';
import { DatepickerModule } from 'angular-mat-datepicker'


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendor_id: any;
  vendors: any ;
  data: any;
  
  constructor(private router: Router, private ProjectService: ProjectService) {

      this.allVendorGraph();
      this.ProjectService.emitvendor.subscribe((res)=>{
      this.vendors = res.vendors;

    });

  }

  changeValue(){

  }

  ngOnInit() {
    this.ProjectService.getAllVendor();
  }

  vendorDetails() {
    this.router.navigate(['home/vendor/vendorDetails'],
        {queryParams: {vendor_id: this.vendor_id}});
  }

  onLinkClick($event: any) {
    // console.log($event);
    if($event.index===1){
       this.router.navigate(['home/vendor']);
    }
  }

  allVendorGraph() {
    // console.log('12');
    this.router.navigate(['home/vendor/allVendorGraph']);

  }

  reset() {
    this.ProjectService.getAllVendor();
    this.router.navigate(['home/vendor']);

  }

  GetVendors(){
    // console.log('121');

  }

}
