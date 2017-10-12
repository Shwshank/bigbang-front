import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../service/projectservice';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendor_id: any;
  vendors: any ;

  constructor(private router: Router, private ProjectService: ProjectService) {
    this.ProjectService.emitvendor.subscribe((res)=>{
       this.vendors = res.vendors ;
    });
  }

  ngOnInit() {
    this.ProjectService.getAllVendor();
  }

  vendorDetails() {
    this.router.navigate(['home/vendor/vendorDetails'],
        {queryParams: {vendor_id: this.vendor_id}});

  }

}
