import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingGraph4Component } from './costing-graph4.component';

describe('CostingGraph4Component', () => {
  let component: CostingGraph4Component;
  let fixture: ComponentFixture<CostingGraph4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostingGraph4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingGraph4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
