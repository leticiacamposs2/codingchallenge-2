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
      status: 0,
      owner: localStorage.owner
    });
  }

  public getMyAuctions(): Observable<AuctionsResponse> {
    return this._http.get('/auctions', {
      status: 1
    });
  }

  public getMyAuctionsById(auctionId: string): Observable<Auction> {
    return this._http.get(`/auctions/${auctionId}`);
  }

  public createAuction(payload): Observable<AuctionsResponse> {
    return this._http.get('/auctions', payload);
  }

  public editAuction(auctionId: string, payload): Observable<Auction> {
    return this._http.put('/auctions', `/${auctionId}`, payload);
  }
}
