import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostingDialogComponent } from './add-costing-dialog.component';

describe('AddCostingDialogComponent', () => {
  let component: AddCostingDialogComponent;
  let fixture: ComponentFixture<AddCostingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCostingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCostingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
