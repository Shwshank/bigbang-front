import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.css']
})
export class NewFolderComponent implements OnInit {

  folder_name: any;
  folder_desc: any;

  constructor() { }

  ngOnInit() {
  }

  saveFolder() {
    console.log(this.folder_name+ "  " +  this.folder_desc);
  }

}
