import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import { PrimaryNavigationComponent } from './components/primary-navigation/primary-navigation.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { ContentNavigationComponent } from './components/content-navigation/content-navigation.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    PrimaryNavigationComponent,
    SideNavigationComponent,
    ContentNavigationComponent,
    FooterComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule {
}
