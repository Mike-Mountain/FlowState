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

  public closeTab(tab, tabs, index) {
    const state: LayoutState = {
      ...this.layoutState,
      contentNavigationHeight: 0
    };
    this.layoutService.updateLayoutState(state);
    this.tabsService.removeTab(tab);
    index > 0 ?
      this.router.navigateByUrl(tabs[index].route) :
      this.router.navigateByUrl('/home/landing');
  }

}
