import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

URL_API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private _http: HttpClient) {
    this._http.get('http://localhost:3000/auctions')
    .subscribe(res => {
      console.log(res);
    });
  }
}
