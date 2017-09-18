import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/projectservice';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.emmitProjectSummary.subscribe( (res)=>{
      console.log(res);
    } )
  }

}
