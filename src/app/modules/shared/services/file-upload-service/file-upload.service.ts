import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private uploadUrl = 'http://localhost:1337/upload';

  constructor(private http: HttpClient) {
  }

  public upload(files: Set<File>): { [key: string]: { progress: Observable<number> } } {
    const status: { [key: string]: { progress: Observable<number>; response?: any } } = {};
    files.forEach(file => {
      const formData = new FormData();
      formData.append('files', file, file.name);

      const req = new HttpRequest('POST', this.uploadUrl, formData, {reportProgress: true});
      const progress = new Subject<number>();

      this.http.request(req).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          const percentUploaded = Math.round(100 * event.loaded / event.total);
          progress.next(percentUploaded);
        } else if (event instanceof HttpResponse) {
          status[file.name].response = event.body[0];
          progress.complete();
        }
      }, error => {
        status[file.name].response = error;
      });
      status[file.name] = {
        progress: progress.asObservable(),
        response: undefined
      };
    });

    return status;
  }
}
