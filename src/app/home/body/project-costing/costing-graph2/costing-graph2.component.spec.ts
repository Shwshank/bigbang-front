import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingGraph2Component } from './costing-graph2.component';

describe('CostingGraph2Component', () => {
  let component: CostingGraph2Component;
  let fixture: ComponentFixture<CostingGraph2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostingGraph2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingGraph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
