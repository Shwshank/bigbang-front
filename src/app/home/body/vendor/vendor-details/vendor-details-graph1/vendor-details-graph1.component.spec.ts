import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDetailsGraph1Component } from './vendor-details-graph1.component';

describe('VendorDetailsGraph1Component', () => {
  let component: VendorDetailsGraph1Component;
  let fixture: ComponentFixture<VendorDetailsGraph1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDetailsGraph1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDetailsGraph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
