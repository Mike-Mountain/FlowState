import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LandingComponent
  ]
})
export class StaticModule {
}
