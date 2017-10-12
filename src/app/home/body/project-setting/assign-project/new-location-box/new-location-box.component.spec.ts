import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocationBoxComponent } from './new-location-box.component';

describe('NewLocationBoxComponent', () => {
  let component: NewLocationBoxComponent;
  let fixture: ComponentFixture<NewLocationBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLocationBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLocationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
