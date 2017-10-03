import { Http, Response, Headers,RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class APIService {

  projectURL: string = 'http://192.168.15.221:8080';

  constructor( private http: Http ) {}

  AddNewUser(pid: any, fname: any, lname: any, email: any, addp: any,  addsp: any,  viewp: any, editp: any, deletep: any, createnu: any , assignu: any) {
    return this.http.post(this.projectURL+'/adduser', '{"pid": "'+pid+'", "fname" : "'+fname+'", "lname" : "'+lname+'", "email": "'+email+'" , "addp": '+addp+', "addsp": '+addsp+', "viewp": '+viewp+', "editp":'+editp+', "deletep": '+deletep+', "createnu": '+createnu+', "assignu": '+assignu+'}');
  }

  AddSubProject(pname: any, pdesc:any, uid: any, pid: any, addsp: any,  viewp: any, editp: any, deletep: any, assignu: any ) {
    return this.http.post(this.projectURL+'/addsubproject', '{"pid": "'+pid+'", "pname" : "'+pname+'", "pdesc" : "'+pdesc+'", "uid": "'+uid+'", "addsp": '+addsp+', "viewp": '+viewp+', "editp":'+editp+', "deletep": '+deletep+', "assignu": '+assignu+'}');
  }

  GetUserPerms(uid: any) {
    return this.http.post(this.projectURL+'/getuserpermissionswhole', '{"uid": "'+uid+'"}').map(res=>res.json());
  }

  GetProjectPerms(pid: any) {
    return this.http.post(this.projectURL+'/getprojectpermissions', '{"pid": "'+pid+'"}').map(res=>res.json());
  }

  GetAllUsers(uid: any) {
    return this.http.post(this.projectURL+'/getuserchildrenprojects', '{"uid": "'+uid+'"}').map(res=>res.json());
  }

  AssignProject2User(upid: any, ucid: any, pid: any, addsp: any, viewp: any, editp: any, deletep: any, assignu: any) {

    return this.http.post(this.projectURL+'/assignuser', '{"upid": "'+upid+'", "ucid": "'+ucid+'","pid": "'+pid+'","addsp": "'+addsp+'","viewp": "'+viewp+'","editp": "'+editp+'","deletep": "'+deletep+'","assignu": "'+assignu+'"}').map(res=>res.json());
  }
}
