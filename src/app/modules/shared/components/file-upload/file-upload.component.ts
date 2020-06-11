import {Component, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import {FileUploadService} from '../../services/file-upload-service/file-upload.service';
import {forkJoin} from 'rxjs';
import {DialogService} from '../../services/dialog-service/dialog.service';
import {PopoverRef} from '../../models/dialog-params.type';
import {FileUploadItem} from '../../models/file-upload.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  public files = new Set<File>();
  public progress: any;
  public uploading: boolean;
  public uploadSuccessful: boolean;
  public canBeClosed: boolean;
  public showCancelButton = true;
  public primaryButtonText = 'Upload';

  @Output() public response = new EventEmitter<FileUploadItem[]>();

  private dialogRef: PopoverRef;

  constructor(private uploadService: FileUploadService,
              private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  public addFiles(event: Event, modalContent: TemplateRef<any>): void {
    // @ts-ignore
    const files = event.target.files;
    Object.keys(files).forEach(key => {
      if (!isNaN(parseInt(key, 10))) {
        this.files.add(files[key]);
      }
    });
    this.open(modalContent);
    this.uploadFiles();
  }

  public uploadFiles(): void {
    if (this.uploadSuccessful) {
      return this.closeDialog();
    }
    this.uploading = true;
    this.canBeClosed = false;
    this.showCancelButton = false;
    this.progress = this.uploadService.upload(this.files);

    const allProgressObservables = Object.keys(this.progress).map(key => this.progress[key].progress);

    this.primaryButtonText = 'Finish';
    this.showCancelButton = false;

    forkJoin(allProgressObservables).subscribe(() => {
      this.uploadSuccessful = true;
      this.canBeClosed = true;
      this.showCancelButton = true;
      this.uploading = false;
      const fileResponseArray: FileUploadItem[] = Object.keys(this.progress).map(key => {
        return {
          name: key,
          data: this.progress[key].response
        };
      });

      this.response.emit(fileResponseArray);
    });
  }

  public openFileUploader(inputEl: HTMLInputElement): void {
    inputEl.click();
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  private open(content: TemplateRef<any>): void {
    this.dialogRef = this.dialogService.open({content});
  }
}
