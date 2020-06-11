import {Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ColorPickerService} from '../../services/color-picker-service/color-picker.service';
import {DialogService} from '../../services/dialog-service/dialog.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [ColorPickerService]
})
export class ColorPickerComponent implements OnInit {

  @Input() label: string;
  @Output() colorValue = new EventEmitter<{ color: string, colorValues: any }>();
  color: string;
  pickerIsActive: boolean;
  count = 0;

  constructor(public colorPickerService: ColorPickerService,
              private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.colorPickerService.getColorPallet().subscribe(color => {
      // TODO: What the fuck is this?
      this.count++;
      console.log(this.count);
      if (this.count > 18) {
        this.colorValue.emit(color);
      }
    });
  }

  openDialog(content: TemplateRef<any>) {
    this.dialogService.open({content});
  }

  // colorChanged(values: { color: string, colorValues: string }) {
  //   this.colorPickerService.getColorPallet().subscribe(color => {
  //     console.log('ColorPicker: ', values);
  //     this.colorValue.emit(values);
  //   });
  // }

}
