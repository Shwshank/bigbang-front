import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdDialog} from '@angular/material';
import {InputOptionDialogComponent} from '../../input-option-dialog/input-option-dialog.component';
import { ProjectService } from '../../../../../service/projectservice';

@Component({
  selector: 'app-cost-content',
  templateUrl: './cost-content.component.html',
  styleUrls: ['./cost-content.component.css']
})
export class CostContentComponent implements OnInit {

  dialogResult = "";

  constructor(private projectService: ProjectService, public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog(type: any) {
    // console.log('tab = 1');
    localStorage.setItem("tab", '2');
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
