import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../../service/projectservice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.css']
})
export class NewFolderComponent implements OnInit {

  folder_name: any;
  folder_desc: any;
  formData: any;

  constructor(private ProjectService: ProjectService) {
    this.formData = new FormData();
  }

  ngOnInit() {
  }

  saveFolder() {
    console.log(this.folder_name+ "  " +  this.folder_desc);
    this.formData.append('folder_name',this.folder_name);
    this.formData.append('folder_desc',this.folder_desc);
    this.ProjectService.addFolder(this.formData);
  }

}
