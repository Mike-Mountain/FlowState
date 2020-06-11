import {Component, OnInit, TemplateRef} from '@angular/core';
import {PopoverContent, PopoverRef} from '../../models/dialog-params.type';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  renderMethod: 'template' | 'component' | 'text' = 'component';
  content: PopoverContent;
  context;

  constructor(private popoverRef: PopoverRef) {
  }

  ngOnInit(): void {
    this.content = this.popoverRef.content;

    switch (true) {
      case typeof this.content === 'string':
        this.renderMethod = 'text';
        break;
      case this.content instanceof TemplateRef:
        this.renderMethod = 'template';
        this.context = {
          close: this.popoverRef.close.bind(this.popoverRef)
        };
        break;
      default:
        this.renderMethod = 'component';
        break;
    }
  }

}
