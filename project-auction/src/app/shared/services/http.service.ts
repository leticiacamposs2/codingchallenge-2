import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly URL = 'http://localhost:3000';

  constructor(private _http: HttpClient) {

  }

  public get(endpoint, params) {
    return this._http.get(this.URL + endpoint);
  }

}
