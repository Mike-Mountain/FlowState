import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './modules/core/components/landing/landing.component';


const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)},
  {path: 'embedded', loadChildren: () => import('./modules/embedded/embedded.module').then(m => m.EmbeddedModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
