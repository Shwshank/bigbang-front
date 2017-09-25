import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';
import { ProjectService } from '../../../../../service/projectservice';
import './allscript.js';

@Component({
  selector: 'app-input-option-dialog',
  templateUrl: './input-option-dialog.component.html',
  styleUrls: ['./input-option-dialog.component.css']
})
export class InputOptionDialogComponent implements OnInit {

  fieldName: any;
  inputData: any = {};
  constructor(private projectService: ProjectService, public thisDialogRef: MdDialogRef<InputOptionDialogComponent>, @Inject(MD_DIALOG_DATA) public data: string) { }

  ngOnInit() {
    // console.log(this.data);
  }

  onCloseConfirm() {
    this.inputData.fieldName =  this.fieldName;
    this.inputData.type =  this.data;
    this.projectService.emmitInputData.emit(this.inputData);
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
