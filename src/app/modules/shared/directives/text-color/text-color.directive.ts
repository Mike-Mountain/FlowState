import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnInit, OnChanges {

  @Input() bgColor: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.bgColor?.currentValue) {
      const colorString = changes.bgColor.currentValue;
      const colorsOnly = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/);
      const rgb: any = {};
      rgb.red = colorsOnly[0];
      rgb.green = colorsOnly[1];
      rgb.blue = colorsOnly[2];
      this.setTextColor(rgb);
    }
  }

  ngOnInit(): void {
  }

  setTextColor(rgb: { red, green, blue }) {
    if ((
      rgb.red * 0.299 +
      rgb.green * 0.578 +
      rgb.blue * 0.114
    ) > 186) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#000');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    }
  }
}
