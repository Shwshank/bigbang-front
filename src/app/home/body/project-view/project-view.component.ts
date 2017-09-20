import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute) {
    localStorage.setItem('flag1', '0');
    localStorage.setItem('flag2', '0');
  }

  ngOnInit() {}

}
