import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leilao } from '../entity/leilao';
import { ThfLookupFilter } from '@totvs/thf-ui/components/thf-field';

@Injectable()
export class LeiloesService implements ThfLookupFilter {

  private apiUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

  getLeiloes() {
    return this.http.get(this.apiUrl);
  }

  getLeilao(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addLeilao(leilao: Leilao) {
    return this.http.post(this.apiUrl, leilao);
  }

  deleteLeilao(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateLeilao(leilao: Leilao) {
    const url = `${this.apiUrl}/${leilao.id}`;

    return this.http.put(url, leilao);
  }

  getFilteredData(filter: string, page: number, pageSize: number): Observable<any> {
    return this.http.get(this.apiUrl, { params: { _page: page.toString(), _limit: pageSize.toString(), q: filter } });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${value}`);
  }
}
