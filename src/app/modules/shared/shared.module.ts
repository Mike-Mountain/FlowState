import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {AuthenticatedWithRoleDirective} from './directives/authenticated-with-role/authenticated-with-role.directive';
import {ColorPickerComponent} from './components/color-picker/color-picker.component';
import {ColorSliderComponent} from './components/color-picker/color-slider/color-slider.component';
import {ColorPaletteComponent} from './components/color-picker/color-palette/color-palette.component';
import {TextColorDirective} from './directives/text-color/text-color.directive';
import {FileUploadComponent} from './components/file-upload/file-upload.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { ResizeDirective } from './directives/resize/resize.directive';


@NgModule({
  declarations: [
    SpinnerComponent,
    AuthenticatedWithRoleDirective,
    ColorPickerComponent,
    ColorSliderComponent,
    ColorPaletteComponent,
    TextColorDirective,
    FileUploadComponent,
    DialogComponent,
    ResizeDirective
  ],
  exports: [
    SpinnerComponent,
    AuthenticatedWithRoleDirective,
    ColorPickerComponent,
    FileUploadComponent,
    ResizeDirective,
  ],
  imports: [
    CommonModule,
    OverlayModule
  ]
})
export class SharedModule {
}
