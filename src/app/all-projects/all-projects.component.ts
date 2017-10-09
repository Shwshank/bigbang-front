import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../service/APIservice';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  constructor(private router: Router, private APIService: APIService) { }

  userDetails: any;
  projects: any;
  ngOnInit() {
    this.userDetails = localStorage.getItem('userDetails');
    this.userDetails = JSON.parse(this.userDetails);
    // console.log(this.userDetails);
    this.projects = this.userDetails.projects_data;
    // console.log(this.projects);
  }

  body(pid:string) {
    localStorage.setItem('flag1','0');  // flag1 = 0 will refresh universeComponent
    localStorage.setItem('currentPID',pid);

    this.APIService.GetUniverse(pid).subscribe((res)=>{

      let temp =  res.json();

      localStorage.setItem('project_data',JSON.stringify(temp.project_data));
      localStorage.setItem('tree',JSON.stringify(temp.project_tree));

      this.router.navigate(['/home']);

    },(err)=>{
      console.log(err);
    });


  }

}
