import {TemplateRef, Type} from '@angular/core';
import {Subject} from 'rxjs';
import {OverlayRef} from '@angular/cdk/overlay';

export interface DialogParams<T> {
  content: PopoverContent;
  data?: T;
  width?: string | number;
  height?: string | number;
}

export interface PopoverCloseEvent<T> {
  type: 'backdropClick' | 'close';
  data: T;
}

export type PopoverContent = TemplateRef<any> | Type<any> | string;

export class PopoverRef<T = any> {
  private afterClosed = new Subject<PopoverCloseEvent<T>>();
  afterClosed$ = this.afterClosed.asObservable();

  constructor(public overlay: OverlayRef,
              public content: PopoverContent,
              public data: T) {
    overlay.backdropClick().subscribe(() => this._close({type: 'backdropClick', data}));
  }

  public close(data?: T) {
    this._close({type: 'close', data});
  }

  private _close({type, data}: PopoverCloseEvent<T>) {
    this.overlay.dispose();
    this.afterClosed.next({
      type,
      data
    });
    this.afterClosed.complete();
  }
}
