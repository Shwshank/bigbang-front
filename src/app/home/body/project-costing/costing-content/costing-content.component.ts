import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { AddCostingDialogComponent } from './add-costing-dialog/add-costing-dialog.component';
import { ProjectService } from '../../../../service/projectservice';

@Component({
  selector: 'app-costing-content',
  templateUrl: './costing-content.component.html',
  styleUrls: ['./costing-content.component.css']
})
export class CostingContentComponent implements OnInit {

  dialogResult = "";
  dataForDialog :any;
  newComponent: boolean = false;


  constructor( public dialog: MdDialog, private ProjectService: ProjectService ) { }

  ngOnInit() {
    this.ProjectService.emitNewCostComponent.subscribe((res)=>{
      console.log(res);
      this.newComponent = res.status;
      localStorage.setItem('ccname',res.ccname);
      localStorage.setItem('ccdesc',res.ccdesc);
      localStorage.setItem('estcost',res.estcost);

    });
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
