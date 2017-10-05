import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingContentComponent } from './costing-content.component';

describe('CostingContentComponent', () => {
  let component: CostingContentComponent;
  let fixture: ComponentFixture<CostingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
