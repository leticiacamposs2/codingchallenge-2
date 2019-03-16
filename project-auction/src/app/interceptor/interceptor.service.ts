import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as HttpStatusCodes from 'http-status-codes';
import { catchError, flatMap } from 'rxjs/operators';
import { HttpService } from '../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private _http: HttpService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.includes('auth/new')) {
      const request = req.clone({
        setHeaders: {
          'Content-Type': 'aplication/json',
          'Authorization' : `Bearer ${localStorage.getItem('access_token')}`
        }
      });

      return next.handle((request)).pipe(
        catchError(error => {
          if (error.status === HttpStatusCodes.UNAUTHORIZED) {
            console.log(localStorage.getItem('refresh_token'));
            console.log(localStorage.getItem('access_token'));
            return this.refreshToken({
              refresh_token: localStorage.getItem('refresh_token')
            }).pipe(
              flatMap(response => {
                const requestRefresh = req.clone({
                  setHeaders: {
                    'Content-Type': 'aplication/json',
                    'Authorization' : `Bearer ${response.access_token}`
                  }
                });
                return next.handle(requestRefresh);
              })
            )

          }
        })
      )
    }
  }

  refreshToken(refreshToken) {
    return this._http.post('/auth/refresh', refreshToken);
  }
}
