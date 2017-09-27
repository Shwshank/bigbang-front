import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectViewComponent } from './home/body/project-view/project-view.component';
import { SummaryComponent } from './home/body/summary/summary.component';
import { ProjectSummaryComponent } from './home/body/project-summary/project-summary.component';
import { UniverseComponent } from './home/body/universe/universe.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent,
    children: [
  	  {
    		path: '',
    		component: UniverseComponent
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

    ]},
  { path: '**', component: LoginComponent }
];
