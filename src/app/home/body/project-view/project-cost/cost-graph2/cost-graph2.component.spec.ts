import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostGraph2Component } from './cost-graph2.component';

describe('CostGraph2Component', () => {
  let component: CostGraph2Component;
  let fixture: ComponentFixture<CostGraph2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostGraph2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostGraph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
