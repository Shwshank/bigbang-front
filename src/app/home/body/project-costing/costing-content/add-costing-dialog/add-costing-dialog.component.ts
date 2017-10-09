import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { ProjectService } from '../../../../../service/projectservice';

@Component({
  selector: 'app-add-costing-dialog',
  templateUrl: './add-costing-dialog.component.html',
  styleUrls: ['./add-costing-dialog.component.css']
})
export class AddCostingDialogComponent implements OnInit {

  ccname: any;
  ccdesc: any;
  estcost: any;

  constructor(private projectService: ProjectService, public thisDialogRef: MdDialogRef<AddCostingDialogComponent>) { }

  ngOnInit() {
  }

  onCloseConfirm() {

    this.thisDialogRef.close('Confirm');
    this.projectService.newCostComponent({status: true, ccname: this.ccname, ccdesc: this.ccdesc, estcost: this.estcost});
  }

  onCloseCancel() {

    this.thisDialogRef.close('Cancel');
  }
}
