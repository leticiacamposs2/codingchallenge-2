import { HttpService } from './../shared/services/http.service';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpService) { }

  loginUser(data: Login) {
    return this._http.post('auth/new', data);
   }

}
