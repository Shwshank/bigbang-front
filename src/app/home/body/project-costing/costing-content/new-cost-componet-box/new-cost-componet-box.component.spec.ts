import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCostComponetBoxComponent } from './new-cost-componet-box.component';

describe('NewCostComponetBoxComponent', () => {
  let component: NewCostComponetBoxComponent;
  let fixture: ComponentFixture<NewCostComponetBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCostComponetBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCostComponetBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
