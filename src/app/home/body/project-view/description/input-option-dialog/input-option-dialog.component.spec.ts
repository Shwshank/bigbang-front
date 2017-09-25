import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOptionDialogComponent } from './input-option-dialog.component';

describe('InputOptionDialogComponent', () => {
  let component: InputOptionDialogComponent;
  let fixture: ComponentFixture<InputOptionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOptionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
