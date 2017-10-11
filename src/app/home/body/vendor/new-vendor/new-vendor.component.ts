import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-new-vendor',
  templateUrl: './new-vendor.component.html',
  styleUrls: ['./new-vendor.component.css']
})
export class NewVendorComponent implements OnInit {

  v_name :any;
  v_desc :any;
  constructor(private ProjectService: ProjectService) { }

  ngOnInit() {
  }

  newVendor() {
    this.ProjectService.newVendor(this.v_name,this.v_desc );
  }
}
