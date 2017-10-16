import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDoughnutComponent } from './vendor-doughnut.component';

describe('VendorDoughnutComponent', () => {
  let component: VendorDoughnutComponent;
  let fixture: ComponentFixture<VendorDoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
