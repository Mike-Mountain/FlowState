import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {AuthenticatedWithRoleDirective} from './directives/authenticated-with-role/authenticated-with-role.directive';


@NgModule({
  declarations: [
    SpinnerComponent,
    AuthenticatedWithRoleDirective
  ],
  exports: [
    SpinnerComponent,
    AuthenticatedWithRoleDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
