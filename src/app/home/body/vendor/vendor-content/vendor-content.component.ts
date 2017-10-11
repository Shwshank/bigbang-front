import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-vendor-content',
  templateUrl: './vendor-content.component.html',
  styleUrls: ['./vendor-content.component.css']
})
export class VendorContentComponent implements OnInit {

  newTendorFlag = false;

  constructor(private ProjectService: ProjectService) {}

  ngOnInit() {
    this.ProjectService.callNewTendor.subscribe((res)=>{
        this.newTendorFlag = res;
      });
  }

  newTendor() {
    this.ProjectService.callNewTendorComponent(true);
  }


}
