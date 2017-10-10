import { Component, OnInit } from '@angular/core';
import './allscript.js';
import './d3.js';

@Component({
  selector: 'app-file-graph',
  templateUrl: './file-graph.component.html',
  styleUrls: ['./file-graph.component.css']
})
export class FileGraphComponent implements OnInit {

  fileflag : any;

  constructor() {

    // set flag for view refresh
    this.fileflag = localStorage.getItem('fileflag');
    // flag 0 will cause to reload the folderview
    if(this.fileflag==='0') {
      localStorage.setItem('fileflag','1');
      window.location.reload();
    }
    else{
      localStorage.setItem('fileflag','1');
    }
    // Initial flag must me 1 in order to load the folderview
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    localStorage.setItem('fileflag','0');           // 'flag1 = 0' will refresh the folderview component
  }

}
