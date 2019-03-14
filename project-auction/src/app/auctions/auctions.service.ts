import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './../shared/services/http.service';
import { AuctionsResponse } from './auctions-response';
import { Auction } from './auction';

@Injectable({
  providedIn: 'root'
})

export class AuctionsService {

  constructor(private _http: HttpService) {}

  public getSketchsAuctions(): Observable<AuctionsResponse> {
    return this._http.get('/auctions', {
      status: 0
    });
  }

  public getMyAuctions(): Observable<AuctionsResponse> {
    return this._http.get('/auctions', {
      status: 1
    });
  }

  public postAddAuctions(payload: Auction): Observable<AuctionsResponse> {
    return this._http.post('/auctions', payload);
  }
}
