import { NgModule } from '@angular/core';

import { ProjectSummaryComponent }   from './project-summary.component';
import { SummaryGraph1Component } from './summary-graph1/summary-graph1.component';
import { routing } from './summary.routing';

@NgModule({
  imports: [routing],
  declarations: [ProjectSummaryComponent, SummaryGraph1Component]
})
export class SummaryModule {}
