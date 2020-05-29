import {Component, Input, OnInit} from '@angular/core';
import {LayoutService} from '../../../core/services/layout.service';
import {LayoutState} from '../../../core/models/layout-state.inteface';

@Component({
  selector: 'app-vitae-container',
  templateUrl: './vitae-container.component.html',
  styleUrls: ['./vitae-container.component.scss']
})
export class VitaeContainerComponent implements OnInit {

  @Input() layoutState: LayoutState;

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  toggleVitaeContainer() {
    const state: LayoutState = {
      ...this.layoutState,
      bottomPanelHeight: 0,
      sidePanelHeight: 100,
      contentPanelHeight: 100
    };
    this.layoutService.updateLayoutState(state);
    this.layoutService.activeVitaeTab = '';
  }

}
