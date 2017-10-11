import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-all-tendors',
  templateUrl: './all-tendors.component.html',
  styleUrls: ['./all-tendors.component.css']
})
export class AllTendorsComponent implements OnInit {

  tendors: any;

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emittendor.subscribe((res)=>{
      this.tendors = res;
      // console.log(res);
    });
  }

  ngOnInit() {
    this.ProjectService.getAllTendor();
  }

}
