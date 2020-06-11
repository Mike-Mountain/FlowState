import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DialogService} from '../../../shared/services/dialog-service/dialog.service';
import {PopoverRef} from '../../../shared/models/dialog-params.type';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild('modalContent') private content: TemplateRef<HTMLElement>;
  private dialogRef: PopoverRef;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>): void {
    this.dialogRef = this.dialogService.open({content});
  }

  close(): void {
    this.dialogRef.close();
  }
}
