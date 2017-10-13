import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';
import { Router, CanActivate } from '@angular/router';

import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails: any;
  singleProject: any;
  notSingleProject: any;

  constructor(private router: Router, private snackBar: MdSnackBar) { }

  ngOnInit() {
    localStorage.setItem('flag1','1'); // for universeComponent
    localStorage.setItem('flag2','1'); // for ProjectTabComponent

    // this.snackBar.open('message', 'close', {
    //   duration: 3000,
    // });

  }

}
