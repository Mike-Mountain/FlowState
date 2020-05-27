import {Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('date') public dateControl: ElementRef;
  public date: Date;

  private datePipe = new DatePipe('en-za');

  constructor(private zone: NgZone,
              private renderer: Renderer2) {
    zone.runOutsideAngular(() => {
      setInterval(() => {
        renderer.setProperty(this.dateControl.nativeElement, 'textContent', this.datePipe.transform(new Date(), 'HH:mm:ss'));
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.date = new Date();
  }

}
