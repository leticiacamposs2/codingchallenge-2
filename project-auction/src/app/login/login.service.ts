import { HttpService } from './../shared/services/http.service';
import { Injectable } from '@angular/core';
import { Login, LoginResponse } from './login';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpService) { }

  loginUser(data: Login): Observable<any> {
    data.email = data.login;
    return this._http.post('/auth/new', data).pipe(
      tap((res: LoginResponse) => {
        this.saveToken('acess_token', res.acess_token);
        this.saveToken('refresh_token', res.refresh_token);
      })
    );
   }

   private saveToken(key, value) {
     localStorage.setItem(key, value);
   }

}
