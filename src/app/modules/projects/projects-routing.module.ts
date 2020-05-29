import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectDetailsComponent} from './components/project-details/project-details.component';


const routes: Routes = [
  {path: 'details/:projectId', component: ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
