import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  sub: any;
  vendor_id: any

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
          this.vendor_id = params.vendor_id;

      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
