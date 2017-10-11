import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGraph1Component } from './vendor-graph1.component';

describe('VendorGraph1Component', () => {
  let component: VendorGraph1Component;
  let fixture: ComponentFixture<VendorGraph1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorGraph1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorGraph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
