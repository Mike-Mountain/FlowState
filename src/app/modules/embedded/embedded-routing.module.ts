import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmbedContainerComponent} from './components/embed-container/embed-container.component';


const routes: Routes = [
  {
    path: 'project/:projectName',
    component: EmbedContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbeddedRoutingModule {
}
