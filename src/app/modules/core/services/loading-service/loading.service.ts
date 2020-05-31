import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoadingSrc = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  setIsLoading(isLoading: boolean): void {
    this.isLoadingSrc.next(isLoading);
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoadingSrc.asObservable();
  }
}
