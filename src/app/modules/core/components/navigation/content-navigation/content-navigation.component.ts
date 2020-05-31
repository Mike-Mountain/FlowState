import {Component, Input, OnInit} from '@angular/core';
import {TabsService} from '../../../services/tabs-service/tabs.service';
import {Router} from '@angular/router';
import {LayoutService} from '../../../services/layout-service/layout.service';
import {LayoutState} from '../../../models/layout-state.inteface';

@Component({
  selector: 'app-content-navigation',
  templateUrl: './content-navigation.component.html',
  styleUrls: ['./content-navigation.component.scss']
})
export class ContentNavigationComponent implements OnInit {

  @Input() layoutState: LayoutState;

  constructor(public tabsService: TabsService,
              private layoutService: LayoutService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public closeTab(tab, tabs, index): void {
    const state: LayoutState = this.layoutState;
    if (JSON.stringify(tab) === JSON.stringify(this.tabsService.activeTab)) {
      if (tabs.length > 1) {
        this.router.navigateByUrl(tabs[index - 1].route).then(() => state.contentNavigationHeight = 100);
        this.tabsService.activeTab = tabs[index - 1];
      } else {
        this.router.navigateByUrl('/home').then(() => state.contentNavigationHeight = 0);
        this.tabsService.activeTab = undefined;
      }
    }
    this.layoutService.updateLayoutState(state);
    this.tabsService.removeTab(tab);
  }

}
