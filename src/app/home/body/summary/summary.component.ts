import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/projectservice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  projectSummary : any;

  constructor(private projectService: ProjectService, private router: Router) {
    this.projectSummary = { 'name': 'Initial Project' }
  }

  ngOnInit() {
    this.projectService.emmitProjectSummary.subscribe( (res)=>{
      console.log(res);
      this.projectSummary = res;
    });
  }

  viewProjectDetails(){
    this.router.navigate(['home/projectView'],
         {queryParams: {projectName: this.projectSummary.name}});
  }

  viewProjectSummary() {
    this.router.navigate(['home/projectSummary'],
         {queryParams: {projectName: this.projectSummary.name}});
  }

}
