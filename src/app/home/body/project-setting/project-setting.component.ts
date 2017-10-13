import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.css']
})
export class ProjectSettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    localStorage.setItem('flag1','0');           // 'flag1 = 0' will refresh the uservise component
  }
}
