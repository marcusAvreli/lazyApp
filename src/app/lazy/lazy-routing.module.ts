import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { DestinationsComponent } from './destinations/destinations.component';

const routes: Routes = [
  {path: '', component: SobreComponent},
	  { path: 'destinations',  component: DestinationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }