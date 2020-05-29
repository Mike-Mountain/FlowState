import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {AboutComponent} from './components/about/about.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'landing', component: LandingComponent},
      {path: 'about', component: AboutComponent},
      {path: '', pathMatch: 'partial', redirectTo: 'landing'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {
}
