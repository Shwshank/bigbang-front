import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../../service/projectservice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  allTendors :any;

  constructor(private route: ActivatedRoute, private router: Router, private ProjectService: ProjectService) {
    this.ProjectService.emitAllTendor.subscribe((res)=>{
      this.allTendors = res;
      // console.log(this.allTendors);
    });
  }

  sub: any;
  vendor_id: any;
  formData :any = new FormData();

  ngOnInit() {
    this.ProjectService.getAllVendor();
    this.sub = this.route
      .queryParams
      .subscribe(params => {
          this.vendor_id = params.vendor_id;
          this.formData.append('vid',this.vendor_id);
          this.ProjectService.getAllTendorWithVendorId(this.formData);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
