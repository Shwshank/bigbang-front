import { NgModule } from '@angular/core';

import { UniverseComponent }   from './universe.component';
import { routing } from './universe.routing';

@NgModule({
  imports: [routing],
  declarations: [UniverseComponent]
})
export class UniverseModule {}
