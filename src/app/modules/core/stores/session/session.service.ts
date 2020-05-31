import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SessionStore} from './session.store';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {createInitialState} from './session.model';

@Injectable({providedIn: 'root'})
export class SessionService {

  private baseUrl = 'http://localhost:1337';

  constructor(private sessionStore: SessionStore,
              private http: HttpClient) {
  }

  login(user: { identifier: string, password: string }): Observable<any> {
    const url = `${this.baseUrl}/auth/local`;
    return this.http.post(url, user).pipe(
      tap(session => {
        this.sessionStore.update(session);
      })
    );
  }

  logout(): void {
    createInitialState();
    this.sessionStore.reset();
  }

}
