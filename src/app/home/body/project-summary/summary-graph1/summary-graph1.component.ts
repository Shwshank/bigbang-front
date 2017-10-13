import { Component, OnInit } from '@angular/core';
import './allscript.js';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-summary-graph1',
  templateUrl: './summary-graph1.component.html',
  styleUrls: ['./summary-graph1.component.css']
})
export class SummaryGraph1Component implements OnInit {

  constructor(private ProjectService: ProjectService) { }

  ngOnInit() {
    this.ProjectService.getMapData();
  }

}
