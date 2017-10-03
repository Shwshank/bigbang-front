import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryGraph2Component } from './summary-graph2.component';

describe('SummaryGraph2Component', () => {
  let component: SummaryGraph2Component;
  let fixture: ComponentFixture<SummaryGraph2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryGraph2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryGraph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
