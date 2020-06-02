import {BehaviorSubject, Observable} from 'rxjs';

export class ColorPickerService {

  private colorPallet = new BehaviorSubject<string>('rgba(255, 255, 255, 2)');
  private colorSlider = new BehaviorSubject<string>('rgba(255, 255, 255, 2)');

  constructor() {
  }

  setColorPallet(hue: string): void {
    this.colorPallet.next(hue);
  }

  getColorPallet(): Observable<string> {
    return this.colorPallet.asObservable();
  }

  setColorSlider(color: string): void {
    this.colorSlider.next(color);
  }

  getColorSlider(): Observable<string> {
    return this.colorSlider.asObservable();
  }
}
