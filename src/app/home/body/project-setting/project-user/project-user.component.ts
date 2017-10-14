import { Component, OnInit } from '@angular/core';
import {MdButtonModule} from '@angular/material';
import { APIService } from '../../../../service/APIservice';

@Component({
  selector: 'app-project-user',
  templateUrl: './project-user.component.html',
  styleUrls: ['./project-user.component.css']
})
export class ProjectUserComponent implements OnInit {

  constructor(private APIService: APIService) { }

  fname : any ='';
  lname : any ='';
  email : any ='';
  permission0: any = false;
  permission1: any = false;
  permission2: any = false;
  permission3: any = false;
  permission4: any = false;
  permission5: any = false;
  permission6: any = false;
  parentID: any = 'cc558080c0464685a64b7a82f22ea5b2';

  ngOnInit() {
    localStorage.setItem('location','');
  }

  saveUser(){


    this.APIService.AddNewUser(this.parentID, this.fname, this.lname, this.email, this.permission0, this.permission1, this.permission2, this.permission3, this.permission4, this.permission5, this.permission6,).subscribe((res)=>{
      console.log(res);
    }, (err) => {
      console.log(err);
    });

  }

}
