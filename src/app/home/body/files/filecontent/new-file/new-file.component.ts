import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-file',
  templateUrl: './new-file.component.html',
  styleUrls: ['./new-file.component.css']
})
export class NewFileComponent implements OnInit {

  folders : any;
  file_name: any;
  file_desc: any;
  folder_id: any;
  files: any;
  formData: any;

  constructor() {
    this.folders = [{'folder_id':'1234', 'folder_name': 'Employees'},  {'folder_id':'1234', 'folder_name': 'Project'}, {'folder_id':'1234', 'folder_name': 'Infra'},{'folder_id':'1234', 'folder_name': 'Tech'},]
  }


  ngOnInit() {
  }

  updated($event) {
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    this.formData = new FormData();
    this.formData.append('file', file);

  }

  save() {
    this.formData.append('file_name', this.file_name);
    this.formData.append('file_desc', this.file_desc);
    this.formData.append('folder_id', this.folder_id);
    console.log(this.formData);

  }

}
