import { HttpService } from './../shared/services/http.service';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpService) { }

  loginUser(data: Login): Observable<any> {
    data.email = data.login;
    return this._http.post('/auth/new', data);
   }

}
