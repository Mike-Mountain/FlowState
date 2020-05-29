import {Component, Input, OnInit} from '@angular/core';
import {LayoutService} from '../../../services/layout.service';
import {LayoutState, PanelState} from '../../../models/layout-state.inteface';

@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html',
  styleUrls: ['./vertical-navigation.component.scss']
})
export class VerticalNavigationComponent implements OnInit {

  @Input() panelState: PanelState;

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  togglePanel(panelName: string, panelState: PanelState) {
    panelState[panelName] = !panelState[panelName];
    this.layoutService.updateSidePanelState(panelState);
    this.layoutService.updateNumberSelected(panelState);
  }
}
