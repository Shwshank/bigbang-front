import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectSummaryComponent }   from './project-summary.component';

const routes: Routes = [
  { path: '', component: ProjectSummaryComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
