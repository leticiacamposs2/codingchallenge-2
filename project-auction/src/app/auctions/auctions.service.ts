import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private _http: HttpService) {
  }

   public getAllAuctions() {
    return this._http.get('/auctions');
   }

}
