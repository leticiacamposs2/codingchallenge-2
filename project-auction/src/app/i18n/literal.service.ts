import { Injectable } from '@angular/core';
import { ThfI18nService } from '@totvs/thf-ui';

@Injectable({
  providedIn: 'root'
})
export class LiteralService {

  public literals = {};
  public literalsAuction = {};

  constructor(private thfi18nService: ThfI18nService) {
    console.log(navigator.language);
    this.thfi18nService.getLiterals({language: navigator.language})
      .subscribe(response => this.literals = response);

    this.thfi18nService.getLiterals({context: 'auctions', language: navigator.language})
      .subscribe(response => this.literalsAuction = response);
   }
}
