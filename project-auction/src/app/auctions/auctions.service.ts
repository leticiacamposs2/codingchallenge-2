import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Auctions } from './auctions';

const URL_API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private _http: HttpClient) {}

  public getAllAuctions() {
    return this._http.get(URL_API + '/auctions');
  }

}
