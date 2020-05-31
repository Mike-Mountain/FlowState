import {Component, ElementRef, Input, NgZone, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {LayoutService} from '../../../services/layout-service/layout.service';
import {LayoutState} from '../../../models/layout-state.inteface';
import {SessionService} from '../../../stores/session/session.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('date') public dateControl: ElementRef;
  @Input() layoutState: LayoutState;
  public date: Date;

  private datePipe = new DatePipe('en-za');

  constructor(private zone: NgZone,
              private renderer: Renderer2,
              public layoutService: LayoutService,
              private sessionService: SessionService) {
    zone.runOutsideAngular(() => {
      setInterval(() => {
        renderer.setProperty(this.dateControl.nativeElement, 'textContent', this.datePipe.transform(new Date(), 'HH:mm:ss'));
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.date = new Date();
  }

  toggleVitaePanel(section: string) {
    let state: LayoutState;
    if (this.layoutService.activeVitaeTab !== section) {
      state = {
        ...this.layoutState,
        bottomPanelHeight: 40,
        contentPanelHeight: 60,
        sidePanelHeight: 60
      };
      this.layoutService.updateLayoutState(state);
      this.layoutService.activeVitaeTab = section;
    } else {
      state = {
        ...this.layoutState,
        bottomPanelHeight: 0,
        contentPanelHeight: 100,
        sidePanelHeight: 100
      };
      this.layoutService.updateLayoutState(state);
      this.layoutService.activeVitaeTab = '';
    }
  }

  logout() {
    this.sessionService.logout();
  }
}
