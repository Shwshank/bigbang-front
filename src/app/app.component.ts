import { Component,  OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {ProjectService} from './service/projectservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  globalMsg: any;

  constructor(public snackBar: MdSnackBar, private ProjectService: ProjectService) {
    this.ProjectService.snackBarData.subscribe((res)=>{

      this.showMsg(res);
    });
  }

  ngOnInit() {}

  showMsg(msg) {
    // console.log(msg);
    this.snackBar.open( msg, 'close', {
      duration: 3500,
    });
  }

}
