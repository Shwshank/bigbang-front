import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { ProjectService } from '../../../../../service/projectservice';

@Component({
  selector: 'app-add-costing-dialog',
  templateUrl: './add-costing-dialog.component.html',
  styleUrls: ['./add-costing-dialog.component.css']
})
export class AddCostingDialogComponent implements OnInit {

  constructor(private projectService: ProjectService, public thisDialogRef: MdDialogRef<AddCostingDialogComponent>) { }

  ngOnInit() {
  }

  onCloseConfirm() {

    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {

    this.thisDialogRef.close('Cancel');
  }
}
