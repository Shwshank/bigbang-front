import { Http, Response, Headers,RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class APIService {

  projectURL: string = 'http://192.168.15.221:8080';

  constructor( private http: Http ) {}

  AddNewUser(pid: any, fname: any, lname: any, email: any,  addsp: any,  viewp: any, editp: any, deletep: any, createnu: any) {
    console.log('21');

    console.log(this.projectURL+'/adduser', '{"pid": "'+pid+'", "fname" : "'+fname+'", "lname" : "'+lname+'", "email": "'+email+'", "addsp": '+addsp+', "viewp": '+viewp+', "editp":'+editp+', "deletep": '+deletep+', "createnu": '+createnu+'}');

    return this.http.post(this.projectURL+'/adduser', '{"pid": "'+pid+'", "fname" : "'+fname+'", "lname" : "'+lname+'", "email": "'+email+'", "addsp": '+addsp+', "viewp": '+viewp+', "editp":'+editp+', "deletep": '+deletep+', "createnu": '+createnu+'}');
    // return this.http.post(this.projectURL, '{fname: "sam", lname: "laname"}').map(res => res.json());
  }

}
