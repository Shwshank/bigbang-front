import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCostingComponentComponent } from './all-costing-component.component';

describe('AllCostingComponentComponent', () => {
  let component: AllCostingComponentComponent;
  let fixture: ComponentFixture<AllCostingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCostingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCostingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
