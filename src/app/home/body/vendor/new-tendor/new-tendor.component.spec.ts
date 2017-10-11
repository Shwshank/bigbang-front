import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTendorComponent } from './new-tendor.component';

describe('NewTendorComponent', () => {
  let component: NewTendorComponent;
  let fixture: ComponentFixture<NewTendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
