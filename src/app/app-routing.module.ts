import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  //{path: '**', loadChildren: './lazy/lazy.module#LazyModule'}
  //{path: '**', loadChildren: './lazy/lazy.module#LazyModule'}
  {path: 'test', redirectTo: '/lazy/destinations'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }