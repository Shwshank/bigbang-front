import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/projectservice';
import { Router, ActivatedRoute } from '@angular/router';
import './dndTree.js';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})

export class UniverseComponent implements OnInit {

  flag1: any;

  constructor(private projectService: ProjectService, private router: Router ) {

    // set flag for view refresh
    this.flag1 = localStorage.getItem('flag1');
    localStorage.setItem('flag0','1');           // 'flag1 = 0' will refresh the Summary component
    // flag 0 will cause to reload the universe
    if(this.flag1==='0') {
      localStorage.setItem('flag1','1');
      window.location.reload();
    }
    else{
      localStorage.setItem('flag1','1');
    }
    // Initial flag must me 1 in order to load the universe

  }

  temp : any = (<any>window).val;

  ngOnInit() {
  }

  ngOnDestroy() {
    localStorage.setItem('flag1','0');           // 'flag1 = 0' will refresh the uservise component
  }

  emitProjectEvent() {
    if(this.temp != (<any>window).val) {
      this.temp = (<any>window).val;
      // console.log(this.temp);
      this.projectService.emmitProjectSummary.emit(this.temp);
    }
  }

  // fun() {
  //   if(this.temp != (<any>window).val) {
  //     this.temp = (<any>window).val;
  //     console.log(this.temp);
  //   }
  // }


}
