import {Compiler, Component, Injector, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LayoutService} from '../../../core/services/layout-service/layout.service';
import {LayoutState} from '../../../core/models/layout-state.inteface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-vitae-container',
  templateUrl: './vitae-container.component.html',
  styleUrls: ['./vitae-container.component.scss']
})
export class VitaeContainerComponent implements OnInit, OnDestroy {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  @Input() layoutState: LayoutState;
  tabSubscription: Subscription;

  constructor(public layoutService: LayoutService,
              private compiler: Compiler,
              private injector: Injector) {
  }

  ngOnInit(): void {
    this.tabSubscription = this.layoutService.getActiveTab().subscribe(activeTab => {
      if (activeTab === 'admin') {
        // Lazy-load the admin module
        this.loadFeature();
      }
    });
  }

  ngOnDestroy(): void {
    this.tabSubscription.unsubscribe();
  }

  public toggleVitaeContainer() {
    const state: LayoutState = {
      ...this.layoutState,
      bottomPanelHeight: 0,
      sidePanelHeight: 100,
      contentPanelHeight: 100
    };
    this.layoutService.updateLayoutState(state);
    this.layoutService.activeVitaeTab = '';
  }

  private loadFeature() {
    // see https://medium.com/@ckyidr9/lazy-load-feature-modules-without-routing-in-angular-9-ivy-220851cc7751
    setTimeout(() => {
      if (this.container) {
        import('../../../admin/admin.module').then(({AdminModule}) => {
          this.compiler.compileModuleAsync(AdminModule).then(moduleFactory => {
            const moduleRef = moduleFactory.create(this.injector);
            const componentFactory = moduleRef.instance.resolveComponent();
            const {instance} = this.container.createComponent(componentFactory, null, moduleRef.injector);

            instance.ngOnChanges({});
          });
        });
      }
    }, 100);
  }

}
