import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ThfLookupFilter } from '@totvs/thf-ui/components/thf-field';

@Injectable()
export class LeilaoLookupService implements ThfLookupFilter {

  private apiUrl = 'http://138.219.88.80:17114/api/v1/auctions/';

  constructor(private http: HttpClient) { }

  getFilteredData(filter: string, page: number, pageSize: number): Observable<any> {
    return this.http.get(this.apiUrl, { params: { page: page.toString(), pageSize: pageSize.toString(), filter: filter }});
  }

  getObjectByValue(value: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?nickname=${value}`);
  }

}
