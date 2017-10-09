import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/APIservice';
import { Router } from '@angular/router';
import './allscript.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : any ='';
  password: any = '';
  loginButton: any = 'Login';
  loginMessage : any = '';

  constructor( private APIService: APIService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginButton = 'Validating...'
    this.APIService.LoginUser(this.email, this.password).subscribe((res)=>{
      console.log(res);
      localStorage.setItem('uid', res.uid);
      this.loginMessage = '';

      if(res.success) {
        localStorage.setItem('userDetails', JSON.stringify(res));
        this.router.navigate(['/allprojects']);
        localStorage.setItem('flag1','0');  // flag1 = 0 will refresh universeComponent
      }

    }, (err)=> {
      console.log(err);
      this.loginMessage = 'Invalid credentials';
    });

    this.loginButton = 'Login';

  }

}
