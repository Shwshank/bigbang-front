import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';
import { ProjectService } from '../../../../service/projectservice';
import './allscript.js';

@Component({
  selector: 'app-input-option-dialog',
  templateUrl: './input-option-dialog.component.html',
  styleUrls: ['./input-option-dialog.component.css']
})
export class InputOptionDialogComponent implements OnInit {

  fieldName: any;
  inputData: any = {} ;

  flag: any ='';
  constructor(private projectService: ProjectService, public thisDialogRef: MdDialogRef<InputOptionDialogComponent>, @Inject(MD_DIALOG_DATA) public data: string) { }

  ngOnInit() {
    this.flag = localStorage.getItem('tab');
    console.log(this.flag);
  }

  onCloseConfirm() {
    this.inputData.fieldName =  this.fieldName;
    this.inputData.type =  this.data;

    if(this.flag === '1') {
      this.projectService.emmitInputDataTab1.emit(this.inputData);

    } else if( this.flag === '2') {
      this.projectService.emmitInputDataTab2.emit(this.inputData);

    } else if( this.flag === '3') {
      this.projectService.emmitInputDataTab3.emit(this.inputData);

    } else if( this.flag === '4') {
      this.projectService.emmitInputDataTab4.emit(this.inputData);

    } else if( this.flag === '5') {
      this.projectService.emmitInputDataTab5.emit(this.inputData);

    }

    // this.projectService.emmitInputData.emit(this.inputData);
    
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
