import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTendorsComponent } from './all-tendors.component';

describe('AllTendorsComponent', () => {
  let component: AllTendorsComponent;
  let fixture: ComponentFixture<AllTendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
