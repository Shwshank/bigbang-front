import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGraphComponent } from './file-graph.component';

describe('FileGraphComponent', () => {
  let component: FileGraphComponent;
  let fixture: ComponentFixture<FileGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
