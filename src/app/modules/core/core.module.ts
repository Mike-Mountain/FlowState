import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {PrimaryNavigationComponent} from './components/navigation/primary-navigation/primary-navigation.component';
import {SideNavigationComponent} from './components/navigation/side-navigation/side-navigation.component';
import {ContentNavigationComponent} from './components/navigation/content-navigation/content-navigation.component';
import {FooterComponent} from './components/footer-area/footer/footer.component';
import {VitaeModule} from '../vitae/vitae.module';
import { VerticalNavigationComponent } from './components/navigation/vertical-navigation/vertical-navigation.component';


@NgModule({
  declarations: [
    LayoutComponent,
    PrimaryNavigationComponent,
    SideNavigationComponent,
    ContentNavigationComponent,
    FooterComponent,
    VerticalNavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    VitaeModule
  ],
  exports: [
    LayoutComponent
  ],
})
export class CoreModule {
}
