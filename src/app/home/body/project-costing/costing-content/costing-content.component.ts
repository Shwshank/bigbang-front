import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { AddCostingDialogComponent } from './add-costing-dialog/add-costing-dialog.component';

@Component({
  selector: 'app-costing-content',
  templateUrl: './costing-content.component.html',
  styleUrls: ['./costing-content.component.css']
})
export class CostingContentComponent implements OnInit {

  dialogResult = "";
  dataForDialog :any;

  constructor( public dialog: MdDialog ) { }

  ngOnInit() {
  }

  addCosting() {
    console.log('add component');
    const dialogRef = this.dialog.open(AddCostingDialogComponent, {
      height: '350px',
      width: '350px',
      data: this.dataForDialog
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      this.dialogResult = result;
    })
  }

}
