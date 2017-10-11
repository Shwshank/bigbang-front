import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendor_id: any;
  vendors: any = [{'name':'7 Techi','id':'1'},{'name':'Ryogi','id':'2'}];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  vendorDetails() {
    this.router.navigate(['home/vendor/vendorDetails'],
        {queryParams: {vendor_id: this.vendor_id}});

  }

}
