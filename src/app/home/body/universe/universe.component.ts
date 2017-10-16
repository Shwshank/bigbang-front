import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/projectservice';
import { APIService } from '../../../service/APIservice';
import { Router, ActivatedRoute } from '@angular/router';
import './dndTree.js';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})

export class UniverseComponent implements OnInit {

  flag1: any;
  pid: any

  constructor(private projectService: ProjectService, private router: Router, private APIService: APIService ) {

    this.pid = localStorage.getItem('pid');
    // set flag for view refresh
    this.flag1 = localStorage.getItem('flag1');
    localStorage.setItem('flag0','1');           // 'flag1 = 0' will refresh the Summary component
    // flag 0 will cause to reload the universe
    if(this.flag1==='0') {

      this.APIService.GetUniverse(this.pid).subscribe((res)=>{

        let temp =  res.json();
        localStorage.setItem('tree',JSON.stringify(temp.project_tree));

      },(err)=>{
        console.log(err);
        this.projectService.snackBar(err);
      });

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


}
