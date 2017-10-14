import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

import './toggle.js';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  userDetails: any;

  constructor(private router: Router, public snackBar: MdSnackBar) { }

  ngOnInit() {

    // this.snackBar.open('message', 'close', {
    //   duration: 2000,
    // });

  }

}
