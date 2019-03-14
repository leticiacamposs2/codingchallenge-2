import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
import * as HttStatusCodes from 'http-status-codes';

import { HttpService } from '../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private _httpService: HttpService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      setHeaders : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.access_token}`
      }
    });

    return next.handle(request)
      .pipe(catchError(err => {
        if (err.status === HttStatusCodes.UNAUTHORIZED ) {
          return this.refreshToken({
            refresh_token: localStorage.refresh_token
          }).pipe(
            flatMap(res => {
              const requestRefresh = req.clone({
                setHeaders : {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${res['access_token']}`
                }
              });
              return next.handle(requestRefresh);
            })
          );
        }
      })
    );
  }

  refreshToken(refreshToken) {
    return this._httpService.post('/auth/refresh', refreshToken);
  }
}
