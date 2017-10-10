import { Routes } from '@angular/router';

import { AuthGuard } from './service/AuthGuard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectViewComponent } from './home/body/project-view/project-view.component';
import { SummaryComponent } from './home/body/summary/summary.component';
import { ProjectSummaryComponent } from './home/body/project-summary/project-summary.component';
import { ProjectCostingComponent } from './home/body/project-costing/project-costing.component';
import { UniverseComponent } from './home/body/universe/universe.component';
import { ProjectSettingComponent } from './home/body/project-setting/project-setting.component';
import { BodyComponent } from './home/body/body.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { FilesComponent } from './home/body/files/files.component';
import { VendorComponent } from './home/body/vendor/vendor.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'allprojects', component: AllProjectsComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
  	  {
    		path: '',
    		component: UniverseComponent,
      },
      {
    		path: 'body',
    		component: BodyComponent,
      },
      {
        path: 'projectView',
        component: ProjectViewComponent
      },
      {
        path: 'universeComponent',
        component: UniverseComponent
      },
      {
        path: 'summaryComponent',
        component: SummaryComponent
      },
      {
        path: 'projectSummary',
        component: ProjectSummaryComponent
      },
      {
        path: 'projectCosting',
        component: ProjectCostingComponent
      },
      {
        path: 'projectSetting',
        component: ProjectSettingComponent
      },
      {
        path: 'projectFiles',
        component: FilesComponent
      },
      {
        path: 'vendor',
        component: VendorComponent
      },
      {
        path: '**',
        component: LoginComponent
      },

    ]},
  { path: '**', component: LoginComponent }
];
