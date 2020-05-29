import {Component, Input, OnInit} from '@angular/core';
import {LayoutService} from '../../../services/layout-service/layout.service';
import {LayoutState, PanelState} from '../../../models/layout-state.inteface';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @Input() panelState: PanelState;
  @Input() layoutState: LayoutState;

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  public togglePanel(panelName: string, panelState: PanelState): void {
    panelState[panelName] = !panelState[panelName];
    this.layoutService.updateSidePanelState(panelState);
    this.layoutService.updateNumberSelected(panelState);
  }
}
