import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-embed-container',
  templateUrl: './embed-container.component.html',
  styleUrls: ['./embed-container.component.scss']
})
export class EmbedContainerComponent implements OnInit {

  private paramSubscription: Subscription;
  public projectUrl: SafeResourceUrl;
  public isMobile: boolean;

  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      this.projectUrl = this.buildProjectURl(params.projectName);
    });
  }

  private buildProjectURl(projectName: string): SafeResourceUrl {
    switch (projectName) {
      case 'mountainBudgets':
        this.isMobile = true;
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://mountain-budgets.firebaseapp.com?u=guest&p=guest');
    }
  }

}
