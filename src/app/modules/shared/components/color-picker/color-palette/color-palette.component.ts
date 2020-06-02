import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter, HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ColorPickerService} from '../../../services/color-picker-service/color-picker.service';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('canvas') private canvas: ElementRef<HTMLCanvasElement>;

  @Output() colorChanged = new EventEmitter<string>();

  private ctx: CanvasRenderingContext2D;
  private mouseDown: boolean;

  public hue: string;
  public position: { x: number, y: number };

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(evt: MouseEvent) {
    this.mouseDown = false;
  }

  constructor(private colorPickerService: ColorPickerService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.colorPickerService.getColorSlider().subscribe(hue => {
      this.hue = hue;
      setTimeout(() => {
        this.draw();
      }, 100);
    });
  }

  public onMouseDown(event: MouseEvent) {
    this.mouseDown = true;
    this.position = {x: event.offsetX, y: event.offsetY};
    this.draw();
    this.emitColor(event.offsetX, event.offsetY);
  }

  public onMouseMove(evt: MouseEvent) {
    if (this.mouseDown) {
      this.position = {x: evt.offsetX, y: evt.offsetY};
      this.draw();
      this.emitColor(evt.offsetX, evt.offsetY);
    }
  }

  private draw() {
    if (!this.ctx) {
      this.ctx = this.canvas.nativeElement.getContext('2d');
    }
    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;

    this.ctx.fillStyle = this.hue || 'rgba(255, 255, 255, 1)';
    this.ctx.fillRect(0, 0, width, height);

    const lightGradient = this.ctx.createLinearGradient(0, 0, width, 0);
    lightGradient.addColorStop(0, 'rgba(255,255,255,1)');
    lightGradient.addColorStop(1, 'rgba(255,255,255,0)');

    this.ctx.fillStyle = lightGradient;
    this.ctx.fillRect(0, 0, width, height);

    const darkGradient = this.ctx.createLinearGradient(0, 0, 0, height);
    darkGradient.addColorStop(0, 'rgba(0,0,0,0)');
    darkGradient.addColorStop(1, 'rgba(0,0,0,1)');

    this.ctx.fillStyle = darkGradient;
    this.ctx.fillRect(0, 0, width, height);

    const pos = {
      x: this.position?.x || 125,
      y: this.position?.y || 325
    };

    // Create the selector circle
    this.ctx.strokeStyle = 'white';
    this.ctx.fillStyle = 'white';
    this.ctx.beginPath();
    this.ctx.arc(
      pos.x,
      pos.y,
      10,
      0,
      2 * Math.PI
    );
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
    this.emitColor(pos.x, pos.y);
  }

  private emitColor(x: number, y: number) {
    const rgbaColor = this.getColorAtPosition(x, y);
    this.colorChanged.emit(rgbaColor);
    this.colorPickerService.setColorPallet(rgbaColor);
  }

  private getColorAtPosition(x: number, y: number) {
    const imageData = this.ctx.getImageData(x, y, 1, 1).data;
    return (
      'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)'
    );
  }

}
