import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryGraph1Component } from './summary-graph1.component';

describe('SummaryGraph1Component', () => {
  let component: SummaryGraph1Component;
  let fixture: ComponentFixture<SummaryGraph1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryGraph1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryGraph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
