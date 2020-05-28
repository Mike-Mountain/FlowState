import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  @Input() public panelIsOpen = true;
  @Output() private toggleEvent = new EventEmitter<boolean>();

  public panelState = {
    projects: true,
    blog: false,
    favorites: false
  };
  public numberSelected: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  public togglePanel(panelName: string) {
    this.panelState[panelName] = !this.panelState[panelName];
    let keys = Object.keys(this.panelState);
    keys = keys.filter(key => this.panelState[key] === true);
    this.numberSelected = keys.length;
    keys.length > 0 ?
      this.toggleEvent.emit(true) :
      this.toggleEvent.emit(false);
  }
}
