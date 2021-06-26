import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import { DestinationsComponent } from './destinations/destinations.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [SobreComponent,DestinationsComponent]
})
export class LazyModule { }