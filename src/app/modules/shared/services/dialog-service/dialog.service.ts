import {Injectable, Injector} from '@angular/core';
import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {DialogParams, PopoverRef} from '../../models/dialog-params.type';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {DialogComponent} from '../../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private overlay: Overlay,
              private injector: Injector) {
  }

  open<T>({content, data, width, height}: DialogParams<T>): PopoverRef<T> {
    const overlayRef = this.overlay.create(this.getOverlayConfig({width, height}));
    const popoverRef = new PopoverRef<T>(overlayRef, content, data);

    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new ComponentPortal(DialogComponent, null, injector));

    return popoverRef;
  }

  private getOverlayConfig({width, height}): OverlayConfig {
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    return new OverlayConfig({
      width,
      height,
      hasBackdrop: true,
      backdropClass: 'popover-backdrop',
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }

  private createInjector(popoverRef: PopoverRef, injector: Injector): PortalInjector {
    const tokens = new WeakMap([[PopoverRef, popoverRef]]);
    return new PortalInjector(injector, tokens);
  }
}
