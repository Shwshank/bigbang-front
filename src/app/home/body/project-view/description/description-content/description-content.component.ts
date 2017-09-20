import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdDialog} from '@angular/material';
import {InputOptionDialogComponent} from '../input-option-dialog/input-option-dialog.component';
import { ProjectService } from '../../../../../service/projectservice';

@Component({
  selector: 'app-description-content',
  templateUrl: './description-content.component.html',
  styleUrls: ['./description-content.component.css']
})

export class DescriptionContentComponent implements OnInit {

  dialogResult = "";

  constructor(private projectService: ProjectService, public dialog: MdDialog) {}

  ngOnInit() {

    // this.projectService.emmitInputData.subscribe( (res)=> {
    //   console.log(res);
    // });

  }

  openDialog(type: any) {
    const dialogRef = this.dialog.open(InputOptionDialogComponent, {
      height: '350px',
      width: '350px',
      data: type
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      this.dialogResult = result;
    })
}

}
