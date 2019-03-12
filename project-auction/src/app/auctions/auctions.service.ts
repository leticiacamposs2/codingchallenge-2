import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { AuctionsResponse } from './auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private _http: HttpService) {
  }

   public getSketchAuctions(): Observable<AuctionsResponse> {
  //   return this._http.get('/auctions', {
  //   status: 0
  //  });

    return this._http.get('/auctions');
  }

}
