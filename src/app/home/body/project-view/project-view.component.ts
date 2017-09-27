import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../../../service/projectservice';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) {
    localStorage.setItem('flag1', '0');
    localStorage.setItem('flag2', '0');
  }

  ngOnInit() {}

  onLinkClick($event: any) {
     console.log($event.index);
    if($event.index === 0) {
      localStorage.setItem("tab", '1');
      this.projectService.emmitTab1Clicked.emit('1');

    } else if ($event.index === 1) {
      localStorage.setItem("tab", '2');
      this.projectService.emmitTab2Clicked.emit('2');

    } else if ($event.index === 2) {
      localStorage.setItem("tab", '3');
      this.projectService.emmitTab3Clicked.emit('3');

    } else if ($event.index === 3) {
      localStorage.setItem("tab", '3');
      this.projectService.emmitTab4Clicked.emit('4');

    } else if ($event.index === 4) {
      localStorage.setItem("tab", '5');
      this.projectService.emmitTab5Clicked.emit('5');

    }

  }

}
