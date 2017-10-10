import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../../../../../service/projectservice';

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

  constructor(private ProjectService: ProjectService) {
    this.folders = [{'folder_id':'default','folder_name':'Default'}]
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
    this.formData.append('fname', this.file_name);
    this.formData.append('fdesc', this.file_desc);
    this.formData.append('fid',   this.folder_id);

    this.ProjectService.addFile(this.formData);

  }

}
