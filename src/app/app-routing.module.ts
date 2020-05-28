import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './modules/static/components/landing/landing.component';
import {AboutComponent} from './modules/static/components/about/about.component';


const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: 'about-me', component: AboutComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
