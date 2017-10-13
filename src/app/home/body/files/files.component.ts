import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  fileflag : any;

  constructor() {
  }

  ngOnInit() {
    localStorage.setItem('flag1','0');
  }

  ngOnDestroy() {
    localStorage.setItem('flag1','0');           // 'flag1 = 0' will refresh the uservise component
  }
}
