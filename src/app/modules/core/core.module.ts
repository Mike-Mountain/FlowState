import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {PrimaryNavigationComponent} from './components/navigation/primary-navigation/primary-navigation.component';
import {SideNavigationComponent} from './components/navigation/side-navigation/side-navigation.component';
import {ContentNavigationComponent} from './components/navigation/content-navigation/content-navigation.component';
import {FooterComponent} from './components/footer-area/footer/footer.component';
import {VitaeModule} from '../vitae/vitae.module';
import {VerticalNavigationComponent} from './components/navigation/vertical-navigation/vertical-navigation.component';
import {ProjectListComponent} from './components/lists/project-list/project-list.component';
import {LandingComponent} from './components/landing/landing.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    PrimaryNavigationComponent,
    SideNavigationComponent,
    ContentNavigationComponent,
    FooterComponent,
    VerticalNavigationComponent,
    ProjectListComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    VitaeModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    LayoutComponent,
    LandingComponent
  ],
})
export class CoreModule {
}
