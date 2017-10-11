import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunBrustComponent } from './sun-brust.component';

describe('SunBrustComponent', () => {
  let component: SunBrustComponent;
  let fixture: ComponentFixture<SunBrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunBrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunBrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
