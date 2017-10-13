import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniverseComponent }   from './universe.component';

const routes: Routes = [
  { path: '', component: UniverseComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
