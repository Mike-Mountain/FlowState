import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss']
})
export class AdminContainerComponent implements OnInit, OnChanges {

  public selectedTab = 'home';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('hello!');
  }

  ngOnInit(): void {
  }

}
