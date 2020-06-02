import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ColorPickerService} from '../../services/color-picker-service/color-picker.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [ColorPickerService]
})
export class ColorPickerComponent implements OnInit {

  @Output() colorValue = new EventEmitter<string>();
  color: string;
  pickerIsActive: boolean;

  constructor(public colorPickerService: ColorPickerService) {
  }

  ngOnInit(): void {
  }

  colorChanged(color: string) {
    this.colorValue.emit(color);
  }

}
