import { Http, Response, Headers,RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class APIService {

  projectURL: string = 'http://192.168.15.221:8080';
  // projectURL: string = 'http://qcitech.org:8081';

  constructor( private http: Http, ) {}

  AddNewUser(pid: any, fname: any, lname: any, email: any, addp: any,  addsp: any,  viewp: any, editp: any, deletep: any, createnu: any , assignu: any) {
    let uid = localStorage.getItem('uid');
    return this.http.post(this.projectURL+'/adduser', '{"upid": "'+uid+'", "fname" : "'+fname+'", "lname" : "'+lname+'", "email": "'+email+'" , "addp": '+addp+', "addsp": '+addsp+', "viewp": '+viewp+', "editp":'+editp+', "deletep": '+deletep+', "createnu": '+createnu+', "assignu": '+assignu+'}');
  }

  AddSubProject(pname: any, pdesc:any, uid: any, pid: any, addsp: any,  viewp: any, editp: any, deletep: any, assignu: any ) {

    let location = localStorage.getItem('location');
    pid = localStorage.getItem('currentPID');
    uid = localStorage.getItem('uid');
    console.log(this.projectURL+'/addsubproject', '{"pid": "'+pid+'", "pname" : "'+pname+'", "pdesc" : "'+pdesc+'", "uid": "'+uid+'", "addsp": '+addsp+', "viewp": '+viewp+', "editp":'+editp+', "deletep": '+deletep+', "assignu": '+assignu+', "location": '+location+'}');
    return this.http.post(this.projectURL+'/addsubproject', '{"pid": "'+pid+'", "pname" : "'+pname+'", "pdesc" : "'+pdesc+'", "uid": "'+uid+'", "addsp": '+addsp+', "viewp": '+viewp+', "editp":'+editp+', "deletep": '+deletep+', "assignu": '+assignu+', "location": '+location+'}');
  }

  GetUserPerms(uid: any) {

    return this.http.post(this.projectURL+'/getuserpermissionswhole', '{"uid": "'+uid+'"}').map(res=>res.json());
  }

  GetProjectPerms(pid: any) {

    return this.http.post(this.projectURL+'/getprojectpermissions', '{"pid": "'+pid+'"}').map(res=>res.json());
  }

  GetAllUsers(uid1: any) {

    let uid = localStorage.getItem('uid');
    return this.http.post(this.projectURL+'/getuserchildrenprojects', '{"uid": "'+uid+'"}').map(res=>res.json());
  }

  AssignProject2User(upid: any, ucid: any, pid: any, addsp: any, viewp: any, editp: any, deletep: any, assignu: any) {

    return this.http.post(this.projectURL+'/assignuser', '{"upid": "'+upid+'", "ucid": "'+ucid+'","pid": "'+pid+'","addsp": "'+addsp+'","viewp": "'+viewp+'","editp": "'+editp+'","deletep": "'+deletep+'","assignu": "'+assignu+'" }').map(res=>res.json());
  }

  LoginUser(email: any, pwd:any) {

    return this.http.post(this.projectURL+'/login', '{"email": "'+email+'", "pwd": "'+pwd+'"}').map(res=>res.json());
  }

  GetUniverse(pid: any) {

    return this.http.post(this.projectURL+'/getproject', '{"pid":"'+pid+'"}');
  }

  AddNewCostingComponent(estcosting: any, name:any, desc: any, data:any) {

    data = JSON.stringify(data);
    let estcost = +estcosting;
    let uid = localStorage.getItem('uid');
    let currentPID = localStorage.getItem('currentPID');
    return this.http.post(this.projectURL+'/addcostchart', '{"uid":"'+uid+'", "pid":"'+currentPID+'", "estcost":'+estcost+', "name":"'+name+'", "desc":"'+desc+'", "data":'+data+'  }');

  }

  GetAllCostingComponent() {

    let currentPID = localStorage.getItem('currentPID');
    return this.http.post(this.projectURL+'/getallcostcharts','{"pid":"'+currentPID+'"}').map(res=>res.json());

  }

  DeleteCostingComponent(cid) {

    let uid = localStorage.getItem('uid');
    let currentPID = localStorage.getItem('currentPID');
    return this.http.post(this.projectURL+'/deletecostchart', '{"uid":"'+uid+'", "pid":"'+currentPID+'", "cid":"'+cid+'"}');

  }

  AddFile(data: any) {

    let uid = localStorage.getItem('uid');
    let currentPID = localStorage.getItem('currentPID');
    data.append('uid',uid);
    data.append('pid',currentPID);
    return this.http.post(this.projectURL+'/addfile',data);

  }

  AddFolder( data: any) {

    let uid = localStorage.getItem('uid');
    let currentPID = localStorage.getItem('currentPID');
    data.append('uid',uid);
    data.append('pid',currentPID);
    return this.http.post(this.projectURL+'/addfolder',data);

  }

  AddVendor( data: any) {

    let uid = localStorage.getItem('uid');
    let currentPID = localStorage.getItem('currentPID');
    data.append('uid',uid);
    data.append('pid',currentPID);
    return this.http.post(this.projectURL+'/addvendor',data);
  }

  GetVendor() {

    return this.http.get(this.projectURL+'/getallvendors ').map(res=>res.json());
  }

  AddTendor( data: any) {

    let uid = localStorage.getItem('uid');
    let currentPID = localStorage.getItem('currentPID');
    data.append('uid',uid);
    data.append('pid',currentPID);
    console.log(data);
    return this.http.post(this.projectURL+'/addtendor',data).map(res=>res.json());
  }

  GetTendor(data) {

    let currentPID = localStorage.getItem('currentPID');
    data.append('pid',currentPID);
    return this.http.post(this.projectURL+'/getalltendors',data).map(res=>res.json());
  }

  GetAllTendorsWithVendorId(data) {

    let currentPID = localStorage.getItem('currentPID');
    data.append('pid',currentPID);
    return this.http.post(this.projectURL+'/getvendor',data).map(res=>res.json());
  }

  GetMapData() {

    let pid = localStorage.getItem('currentPID');
    return this.http.post(this.projectURL+'/getprojectsummary','{ "pid":"'+pid+'" }').map(res=>res.json());
  }

  AddMapData(Data: any) {

    Data = JSON.stringify(Data);
    let pid = localStorage.getItem('currentPID');
    return this.http.post(this.projectURL+'/addprojectlocation','{ "pid":"'+pid+'" , "location":'+Data+'}').map(res=>res.json());
  }

  BarChartOfAllVendors(formData : any) {
    let pid = localStorage.getItem('currentPID');
    formData.append('pid',pid);
    return this.http.post(this.projectURL+'/barchartallvendors', formData).map(res=>res.json());
  }

  DeleteTendorByUser(formData: any) {

    let uid = localStorage.getItem('uid');
    formData.append('uid',uid);
    return this.http.post(this.projectURL+'/deletetendor', formData).map(res=>res.json());
  }

}
