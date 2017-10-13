import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-costing',
  templateUrl: './project-costing.component.html',
  styleUrls: ['./project-costing.component.css']
})
export class ProjectCostingComponent implements OnInit {

  constructor () {}

  ngOnInit() {}

  ngOnDestroy() {
    localStorage.setItem('flag1','0');           // 'flag1 = 0' will refresh the uservise component
  }
}
