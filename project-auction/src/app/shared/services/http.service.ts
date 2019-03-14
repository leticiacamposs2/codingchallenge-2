import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auction } from 'src/app/auctions/auction';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private readonly URL_API = 'http://10.171.67.175:17114/api/v1';

  constructor(private _http: HttpClient) { }

  public get(endpoint: string, queryParams = {}): Observable<any> {
    const params = new HttpParams({
      fromObject: queryParams
    });
    return  this._http.get(this.URL_API + endpoint, {params});
  }

  public post(endpoint: string, payload: object, params: object = {}): Observable<any> {
    return this._http.post(this.URL_API + endpoint, payload, params);
  }
}
