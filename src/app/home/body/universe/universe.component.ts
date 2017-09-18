import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../service/projectservice';
import './dndTree.js';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent implements OnInit {

  constructor(private projectService: ProjectService ) { }

  temp : any = (<any>window).val;

  ngOnInit() {
    setInterval(this.fun, 1000);
  }

  fun() {
    if(this.temp != (<any>window).val) {
      // console.log((<any>window).val);
      this.temp = (<any>window).val;
      this.projectService.emmitProjectSummary.emit("67");

    }
  }

}
