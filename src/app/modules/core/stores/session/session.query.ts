import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {SessionStore} from './session.store';
import {Observable} from 'rxjs';
import {SessionState, User} from './session.model';

@Injectable({providedIn: 'root'})
export class SessionQuery extends Query<SessionState> {

  private isLoggedIn$ = this.select(state => (state.jwt !== null && state.jwt !== undefined));
  private token$ = this.select(state => state.jwt);
  private user$ = this.select(state => state.user);

  constructor(protected store: SessionStore) {
    super(store);
  }

  getUser(): Observable<User> {
    return this.user$;
  }

  getToken(): Observable<string> {
    return this.token$;
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$;
  }

}
