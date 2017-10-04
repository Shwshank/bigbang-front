import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/projectservice';
import { Router, ActivatedRoute } from '@angular/router';
import './active.js';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  projectSummary : any;
  project_data : any;
  project_desc : any;
  project_id : any;

  constructor(private projectService: ProjectService, private router: Router) {
    this.project_data = localStorage.getItem('project_data');
    this.project_data = JSON.parse(this.project_data);

    console.log(this.project_data);

    this.projectSummary = { 'name': this.project_data.project_name };
    this.project_desc = this.project_data.project_description;
    this.project_id = this.project_data.project_id;
  }

  ngOnInit() {
    this.projectService.emmitProjectSummary.subscribe( (res)=>{
       console.log(res);
       console.log(res.project_id);
       this.projectSummary = res;
       this.project_desc = res.pdesc;
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

  viewUniverse() {
    this.router.navigate(['home/']);
  }

  projectSetting() {
    this.router.navigate(['home/projectSetting'],
         {queryParams: {projectName: this.projectSummary.name}});
  }

  viewProjectCosting() {
    this.router.navigate(['home/projectCosting'],
         {queryParams: {projectName: this.projectSummary.name}});
  }

}
