import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingGraph1Component } from './costing-graph1.component';

describe('CostingGraph1Component', () => {
  let component: CostingGraph1Component;
  let fixture: ComponentFixture<CostingGraph1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostingGraph1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingGraph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
