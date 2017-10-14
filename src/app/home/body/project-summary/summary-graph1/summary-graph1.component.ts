import { Component, OnInit } from '@angular/core';
import './allscript.js';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-summary-graph1',
  templateUrl: './summary-graph1.component.html',
  styleUrls: ['./summary-graph1.component.css']
})
export class SummaryGraph1Component implements OnInit {

  mapData: any;
  pdetails: any;
  display: any = false;

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.projectDetails.subscribe((res)=>{
      this.pdetails = res;
      console.log(this.pdetails);
      this.display = true;
    });
  }

  ngOnInit() {


  }
  ngAfterViewInit() {

  }
}
