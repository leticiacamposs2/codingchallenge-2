import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { HttpService } from './../shared/services/http.service';
import { Login } from './login';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpService: HttpService) { }

  loginUser(newLogin: Login) {
    newLogin.email = newLogin.login;

    return this._HttpService.post('/auth/new', newLogin)
      .pipe(tap((res: LoginResponse) => {
        this.saveToken('access_token', res.access_token);
        this.saveToken('refresh_token', res.refresh_token);
      }));
  }

  private saveToken(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
