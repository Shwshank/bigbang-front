import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostContentComponent } from './cost-content.component';

describe('CostContentComponent', () => {
  let component: CostContentComponent;
  let fixture: ComponentFixture<CostContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
