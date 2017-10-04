import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCostingComponent } from './project-costing.component';

describe('ProjectCostingComponent', () => {
  let component: ProjectCostingComponent;
  let fixture: ComponentFixture<ProjectCostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
