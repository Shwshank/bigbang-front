import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostDynamicFormComponent } from './cost-dynamic-form.component';

describe('CostDynamicFormComponent', () => {
  let component: CostDynamicFormComponent;
  let fixture: ComponentFixture<CostDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
