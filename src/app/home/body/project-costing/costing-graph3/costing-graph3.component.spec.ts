import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingGraph3Component } from './costing-graph3.component';

describe('CostingGraph3Component', () => {
  let component: CostingGraph3Component;
  let fixture: ComponentFixture<CostingGraph3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostingGraph3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingGraph3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
