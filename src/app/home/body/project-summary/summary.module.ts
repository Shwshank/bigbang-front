import { NgModule } from '@angular/core';

import { routing } from './summary.routing';

import { ProjectSummaryComponent }   from './project-summary.component';
import { SummaryGraph1Component } from './summary-graph1/summary-graph1.component';
import { SummaryGraph2Component } from './summary-graph2/summary-graph2.component';

@NgModule({
  imports: [routing],
  declarations: [ProjectSummaryComponent, SummaryGraph1Component, SummaryGraph2Component]
})
export class SummaryModule {}
