import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./modules/static/static.module').then(m => m.StaticModule)},
  {path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
