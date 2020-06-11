import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionQuery} from '../stores/session/session.query';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private sessionQuery: SessionQuery) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.sessionQuery.getIsLoggedIn().subscribe(authenticated => {
      if (!authenticated) {
        return next.handle(request);
      }

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.sessionQuery.getValue().jwt}`
        }
      });
    });

    return next.handle(request);
  }
}
