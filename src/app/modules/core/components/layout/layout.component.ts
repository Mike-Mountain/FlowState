import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../services/layout-service/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }
}
