import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostGraph1Component } from './cost-graph1.component';

describe('CostGraph1Component', () => {
  let component: CostGraph1Component;
  let fixture: ComponentFixture<CostGraph1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostGraph1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostGraph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
