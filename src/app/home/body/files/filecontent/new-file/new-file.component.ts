import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-file',
  templateUrl: './new-file.component.html',
  styleUrls: ['./new-file.component.css']
})
export class NewFileComponent implements OnInit {

  folders : any;

  constructor() {
    this.folders = [{'folder_id':'1234', 'folder_name': 'Employees'},  {'folder_id':'1234', 'folder_name': 'Project'}, {'folder_id':'1234', 'folder_name': 'Infra'},{'folder_id':'1234', 'folder_name': 'Tech'},]
  }

  ngOnInit() {
    
  }

}
