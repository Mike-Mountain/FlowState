import {Directive, ElementRef, HostListener, Inject, NgZone, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective implements OnInit {

  private resizeHelperTop: HTMLDivElement;
  private resizeHelperLeft: HTMLDivElement;
  private resizeHelperBottom: HTMLDivElement;
  private resizeHelperRight: HTMLDivElement;

  @HostListener('document:dragover', ['$event'])
  onDrag(event: DragEvent) {
    this.zone.runOutsideAngular(() => {
      // if (event.clientX > 210) {
        this.renderer.setStyle(this.el.nativeElement, 'height', event.clientY + 'px');
      // }
    });
  }

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private zone: NgZone) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.createHelperElements();
  }

  // ___________Create Helper Elements.
  private createHelperElements() {
    this.resizeHelperTop = this.renderer.createElement('div');
    this.resizeHelperLeft = this.renderer.createElement('div');
    this.resizeHelperBottom = this.renderer.createElement('div');
    this.resizeHelperRight = this.renderer.createElement('div');
    this.renderer.setAttribute(this.resizeHelperTop, 'draggable', 'true');
    this.renderer.setAttribute(this.resizeHelperLeft, 'draggable', 'true');
    this.renderer.setAttribute(this.resizeHelperBottom, 'draggable', 'true');
    this.renderer.setAttribute(this.resizeHelperRight, 'draggable', 'true');
    this.appendHelperElements();
  }

  private appendHelperElements() {
    this.renderer.appendChild(this.el.nativeElement, this.resizeHelperTop);
    this.renderer.appendChild(this.el.nativeElement, this.resizeHelperLeft);
    this.renderer.appendChild(this.el.nativeElement, this.resizeHelperBottom);
    this.renderer.appendChild(this.el.nativeElement, this.resizeHelperRight);
    this.styleHelperElements();
  }

  private styleHelperElements() {
    this.renderer.addClass(this.resizeHelperTop, 'resize-helper-top');
    this.renderer.addClass(this.resizeHelperLeft, 'resize-helper-left');
    this.renderer.addClass(this.resizeHelperBottom, 'resize-helper-bottom');
    this.renderer.addClass(this.resizeHelperRight, 'resize-helper-right');
  }

  // ___________Add click handlers.

}
