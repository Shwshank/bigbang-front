import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../../service/APIservice';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.css']
})
export class AssignProjectComponent implements OnInit {

  pname: any = '';
  pdesc: any = '';

  uid : any = 'cc558080c0464685a64b7a82f22ea5b2';
  permission1: any = false;
  permission2: any = false;
  permission3: any = false;
  permission4: any = false;
  permission5: any = false;
  pid : any = '8411dd40f5db43dca5e95600d60e645f';

  disabled1: any= false;
  disabled2: any= false;
  disabled3: any= false;
  disabled4: any= false;
  disabled5: any= false;

  child_users : any;
  projects : any;
  user_id: any;
  project_id: any;

  constructor(private APIService: APIService, private ProjectService: ProjectService) { }

  ngOnInit() {
    this.APIService.GetAllUsers(this.uid).subscribe((res)=>{
      console.log(res);
       this.child_users = res.children;
       this.projects = res.projects;
    }, (err) => {
      console.log(err);
      this.ProjectService.snackBar(err);
    });
  }

  userSelected() {
    console.log(this.user_id);
    this.APIService.GetUserPerms(this.user_id).subscribe((res)=>{
      res = res.upw;
      console.log(res);
      this.permission1 = res.addsp;
      this.permission2 = res.viewp;
      this.permission3 = res.editp;
      this.permission4 = res.deletep;
      this.permission5 = res.assignu;

      if(!this.permission1) {
        this.disabled1 = true;
      } else {
        this.disabled2 = false;
      }
      if(!this.permission2) {
        this.disabled2 = true;
      }else {
        this.disabled3 = false;
      }
      if(!this.permission3) {
        this.disabled3 = true;
      }else {
        this.disabled3 = false;
      }
      if(!this.permission4) {
        this.disabled4 = true;
      }else {
        this.disabled4 = false;
      }
      if(!this.permission5) {
        this.disabled5 = true;
      }else {
        this.disabled5 = false;
      }

    }, (err) => {
      console.log(err);
    });
  }

  projectSelected(){
    console.log(this.project_id);
    this.APIService.GetProjectPerms(this.project_id).subscribe((res)=>{
      res = res.pp;
      console.log(res);

      if(this.permission1) {
        this.permission1 = res.addsp;
      }
      if(this.permission2) {
        this.permission2 = res.viewp;
      }
      if(this.permission3) {
        this.permission3 = res.editp;
      }
      if(this.permission4) {
        this.permission4 = res.deletep;
      }
      if(this.permission5) {
        this.permission5 = res.assignu;
      }


            if(!this.permission1) {
              this.disabled1 = true;
            } else {
              this.disabled2 = false;
            }
            if(!this.permission2) {
              this.disabled2 = true;
            }else {
              this.disabled3 = false;
            }
            if(!this.permission3) {
              this.disabled3 = true;
            }else {
              this.disabled3 = false;
            }
            if(!this.permission4) {
              this.disabled4 = true;
            }else {
              this.disabled4 = false;
            }
            if(!this.permission5) {
              this.disabled5 = true;
            }else {
              this.disabled5 = false;
            }


    }, (err) => {
      console.log(err);
    });

  }

  assignProject2User() {
    this.APIService.AssignProject2User(this.uid, this.user_id, this.project_id, this.permission1, this.permission2, this.permission3, this.permission4, this.permission5).subscribe((res)=>{

      console.log(res);
      {
          this.ProjectService.snackBar('Project assigned to user');
      }

    },(err)=>{
      console.log(err);
      this.ProjectService.snackBar(err);
    });
  }

}
