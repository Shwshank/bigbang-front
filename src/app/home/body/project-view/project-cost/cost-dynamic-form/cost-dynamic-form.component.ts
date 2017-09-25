import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../../service/projectservice';

@Component({
  selector: 'app-cost-dynamic-form',
  templateUrl: './cost-dynamic-form.component.html',
  styleUrls: ['./cost-dynamic-form.component.css']
})
export class CostDynamicFormComponent implements OnInit {

  flag1 : boolean= false;
  text : string='';
  type : string='';
  data : string='';
  display: string='';
  palceholder: string='123';
  inputArray: any =[];

  constructor( private projectService: ProjectService ) {}

  ngOnInit() {
    this.projectService.emmitInputDataTab2.subscribe( (res)=> {
       console.log(res);
      this.text = res.fieldName;
      this.type = res.type;
      this.inputArray.push({'text':this.text, 'type':this.type, 'data':''});
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
