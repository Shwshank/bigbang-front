import { Component, OnInit } from '@angular/core';
import './summary-graph1/allscript.js';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {

  flag0 : any;

  constructor() {
    console.log('flag check');
    this.flag0 = localStorage.getItem('flag0');
    if(this.flag0==='0') {
      localStorage.setItem('flag0','1');
      window.location.reload();
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    console.log('flaged');
    localStorage.setItem('flag0','0');           // 'flag1 = 0' will refresh the Summary component
    localStorage.setItem('flag1','0');           // 'flag1 = 0' will refresh the uservise component
  }

}
