import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../service/APIservice';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  pname: any = '';
  pdesc: any = '';
  uid : any = 'cc558080c0464685a64b7a82f22ea5b2';
  permission1: any = false;
  permission2: any = false;
  permission3: any = false;
  permission4: any = false;
  permission5: any = false;
  pid : any = '4e8a629489544d7bbc6925f8236305a7';


  child_users = [
    {value: '34ec653f7d254114827c283900266984', viewValue: 'User 1'},
    {value: '34ec653f7d254114827c283900266984', viewValue: 'User 2'},
    {value: '34ec653f7d254114827c283900266984', viewValue: 'User 3'}
  ];

  constructor(private APIService: APIService, private ProjectService: ProjectService) { }

  ngOnInit() {
  }

  saveProject() {

        this.APIService.AddSubProject( this.pname, this.pdesc, this.uid, this.pid, this.permission1, this.permission2, this.permission3, this.permission4, this.permission5)
        .subscribe((res)=>{
           {
            this.ProjectService.snackBar('Project created');

          }
          console.log(res);
        }, (err) => {
          this.ProjectService.snackBar(err);
          console.log(err);
        });
  }

}
