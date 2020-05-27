import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public panelIsOpen = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggleSidePanel(isOpen: boolean) {
    console.log(isOpen);
    this.panelIsOpen = isOpen;
  }
}
