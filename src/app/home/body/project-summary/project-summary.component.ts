import { Component, OnInit } from '@angular/core';
import './summary-graph1/allscript.js';
import { ProjectService } from '../../../service/projectservice';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {

  flag0 : any;
  mapData: any;
  noMapData : any;
  
  constructor(private snackBar: MdSnackBar, private ProjectService: ProjectService) {
    // console.log('flag check');
    this.flag0 = localStorage.getItem('flag0');
    if(this.flag0==='0') {
      localStorage.setItem('flag0','1');
      window.location.reload();
    }
    if(this.mapData == 'undefined') {
      this.noMapData = true;
    }

  }

  ngOnInit() {
    this.ProjectService.getMapData();
    this.mapData = localStorage.getItem('mapData');
    console.log(this.mapData);

  }

  ngOnDestroy() {
    // console.log('flaged');
    localStorage.setItem('flag0','0');           // 'flag1 = 0' will refresh the Summary component
    localStorage.setItem('flag1','0');           // 'flag1 = 0' will refresh the uservise component

  }

}
