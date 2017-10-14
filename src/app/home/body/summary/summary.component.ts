import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/projectservice';
import { Router, ActivatedRoute } from '@angular/router';

import {NgPipesModule} from 'ngx-pipes';
import './active.js';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  universe : any;
  summary: any;
  costing: any;
  vendors: any;
  file: any;
  setting: any;
  menu: any;

  projectSummary : any;
  project_data : any;
  project_desc : any;
  project_id : any;

  constructor(private projectService: ProjectService, private router: Router) {
    this.project_data = localStorage.getItem('project_data');
    this.project_data = JSON.parse(this.project_data);

    // console.log(this.project_data);

    this.projectSummary = { 'name': this.project_data.project_name };
    this.project_desc = this.project_data.project_description;
    this.project_id = this.project_data.project_id;
  }

  ngOnInit() {
      this.menuClicked();
      this.projectService.emmitProjectSummary.subscribe( (res)=>{
       // console.log(res);
       // console.log(res.project_id);
      localStorage.setItem('currentPID',res.project_id);
      this.projectSummary = res;
      this.project_desc = res.pdesc;
      this.projectService.getMapData();
    });
  }

  menuClicked() {
    this.menu = localStorage.getItem('menu');
    // console.log(this.menu);
    if(this.menu === 'universe') {
      this.universe = true;
      this.summary = false;
      this.costing = false;
      this.vendors = false;
      this.file = false;
      this.setting = false;
    }
    else if(this.menu === 'summary') {
      this.universe = false;
      this.summary = true;
      this.costing = false;
      this.vendors = false;
      this.file = false;
      this.setting = false;
    }
    else if(this.menu === 'costing') {
      this.universe = false;
      this.summary = false;
      this.costing = true;
      this.vendors = false;
      this.file = false;
      this.setting = false;
    }
    else if(this.menu === 'vendors') {
      this.universe = false;
      this.summary = false;
      this.costing = false;
      this.vendors = true;
      this.file = false;
      this.setting = false;
    }
    else if(this.menu === 'file') {
      this.universe = false;
      this.summary = false;
      this.costing = false;
      this.vendors = false;
      this.file = true;
      this.setting = false;
    }
    else if(this.menu === 'setting') {
      this.universe = false;
      this.summary = false;
      this.costing = false;
      this.vendors = false;
      this.file = false;
      this.setting = true;
    }
  }


  viewUniverse() {
    localStorage.setItem('menu','universe');
    this.menuClicked();
    this.router.navigate(['home/']);
    this.menuClicked();
  }

  viewProjectSummary() {
    localStorage.setItem('menu','summary');
    this.menuClicked();
    this.router.navigate(['home/projectSummary'],
    {queryParams: {projectName: this.projectSummary.name}});
  }

  viewProjectCosting() {
    localStorage.setItem('menu','costing');
    this.menuClicked();
    this.router.navigate(['home/projectCosting'],
         {queryParams: {projectName: this.projectSummary.name}});
  }

  viewFiles() {
    localStorage.setItem('menu','file');
    this.menuClicked();
    this.router.navigate(['home/projectFiles'],
         {queryParams: {projectName: this.projectSummary.name}});
  }

  vendor() {
    localStorage.setItem('menu','vendors');
    this.menuClicked();
    this.router.navigate(['home/vendor'],
         {queryParams: {projectName: this.projectSummary.name}});
  }

  projectSetting() {
    localStorage.setItem('menu','setting');
    this.menuClicked();
    this.router.navigate(['home/projectSetting'],
    {queryParams: {projectName: this.projectSummary.name}});
  }

  // viewProjectDetails(){
  //   this.router.navigate(['home/projectView'],
  //        {queryParams: {projectName: this.projectSummary.name}});
  //
  // }
}
