import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionContentComponent } from './description-content.component';

describe('DescriptionContentComponent', () => {
  let component: DescriptionContentComponent;
  let fixture: ComponentFixture<DescriptionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
