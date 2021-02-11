import {BehaviorSubject, Observable} from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class ColorPickerService {

  private colorPallet = new BehaviorSubject<{ color, colorValues }>({color: 'rgba(255, 255, 255, 1}', colorValues: '255, 255, 255'});
  private colorSlider = new BehaviorSubject<{ color, colorValues }>({color: 'rgba(255, 255, 255, 1}', colorValues: '255, 255, 255'});

  constructor() {
  }

  setColorPallet(hue: { color, colorValues }): void {
    this.colorPallet.next(hue);
  }

  getColorPallet(): Observable<{ color, colorValues }> {
    return this.colorPallet.asObservable();
  }

  setColorSlider(color: { color, colorValues }): void {
    this.colorSlider.next(color);
  }

  getColorSlider(): Observable<{ color, colorValues }> {
    return this.colorSlider.asObservable();
  }
}
