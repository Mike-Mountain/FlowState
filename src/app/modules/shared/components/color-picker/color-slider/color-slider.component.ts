import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {ColorPickerService} from '../../../services/color-picker-service/color-picker.service';

@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.scss']
})
export class ColorSliderComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  @Output() colorChanged = new EventEmitter<string>();

  private ctx: CanvasRenderingContext2D;
  private mouseDown: boolean;
  private position: number;

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.mouseDown = false;
  }

  constructor(private colorPickerService: ColorPickerService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.draw();
  }

  public onMouseDown(event: MouseEvent) {
    this.mouseDown = true;
    this.position = event.offsetY;
    this.draw();
    this.emitColor(event.offsetX, event.offsetY);
  }

  public onMouseMove(event: MouseEvent) {
    if (this.mouseDown) {
      this.position = event.offsetY;
      this.draw();
      this.emitColor(event.offsetX, event.offsetY);
    }
  }

  private draw() {
    if (!this.ctx) {
      this.ctx = this.canvas.nativeElement.getContext('2d');
    }

    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;
    this.ctx.clearRect(0, 0, width, height);

    const gradient = this.ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
    gradient.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
    gradient.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
    gradient.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
    gradient.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
    gradient.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 0, 0, 1)');

    this.ctx.beginPath();
    this.ctx.rect(0, 0, width, height);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
    this.ctx.closePath();

    if (this.position) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = 5;
      this.ctx.rect(0, this.position - 5, width, 10);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  private emitColor(x: number, y: number) {
    const rgba = this.getColorPosition(x, y);
    // this.colorChanged.emit(rgba);
    this.colorPickerService.setColorSlider(rgba);
  }

  private getColorPosition(x: number, y: number) {
    const data = this.ctx.getImageData(x, y, 1, 1).data;
    return `rgba(${data[0]}, ${data[1]}, ${data[2]}, 1)`;
  }
}
