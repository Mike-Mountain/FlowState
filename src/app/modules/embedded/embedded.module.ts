import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmbeddedRoutingModule} from './embedded-routing.module';
import {EmbedContainerComponent} from './components/embed-container/embed-container.component';


@NgModule({
  declarations: [EmbedContainerComponent],
  imports: [
    CommonModule,
    EmbeddedRoutingModule
  ]
})
export class EmbeddedModule {
}
