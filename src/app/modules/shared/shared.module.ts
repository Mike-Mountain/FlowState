import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {AuthenticatedWithRoleDirective} from './directives/authenticated-with-role/authenticated-with-role.directive';
import {ColorPickerComponent} from './components/color-picker/color-picker.component';
import {ColorSliderComponent} from './components/color-picker/color-slider/color-slider.component';
import {ColorPaletteComponent} from './components/color-picker/color-palette/color-palette.component';
import {TextColorDirective} from './directives/text-color/text-color.directive';


@NgModule({
  declarations: [
    SpinnerComponent,
    AuthenticatedWithRoleDirective,
    ColorPickerComponent,
    ColorSliderComponent,
    ColorPaletteComponent,
    TextColorDirective,
  ],
  exports: [
    SpinnerComponent,
    AuthenticatedWithRoleDirective,
    ColorPickerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
