import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  flag1 : boolean= false;
  text : string='';
  type : string='';
  data : string='';
  display: string='';
  palceholder: string='123';
  inputArray: any =[];


  constructor( private projectService: ProjectService ) {  }

  ngOnInit() {
    this.projectService.emmitInputData.subscribe( (res)=> {
      // console.log(res);
      this.text = res.fieldName;
      this.type = res.type;
      this.inputArray.push({'inputname':this.text, 'type':this.type, 'data':''});
      console.log(this.inputArray);
      this.flag1 = true;
    });
  }

  Save() {
    this.display = this.text+' : '+this.type+' : '+this.data;
  }

  Cancel(pos) {
    console.log(pos);
    this.inputArray.splice(pos,1);
  }
}
