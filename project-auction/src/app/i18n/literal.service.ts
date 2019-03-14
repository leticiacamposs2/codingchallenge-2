import { ThfI18nService } from '@totvs/thf-ui/services/thf-i18n';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiteralService {

  public literals: {};
  public literalsAuction: {};
  public literalsShared: {};
  public literalsHome: {};

  constructor(private thfi18nService: ThfI18nService) {
      this.thfi18nService.getLiterals({language: navigator.language})
      .subscribe(res => this.literals = res);

      this.thfi18nService.getLiterals({context: 'auction', language: navigator.language})
      .subscribe(res => this.literalsAuction = res);

      this.thfi18nService.getLiterals({context: 'shared', language: navigator.language})
      .subscribe(res => this.literalsShared = res);

      this.thfi18nService.getLiterals({context: 'home', language: navigator.language})
      .subscribe(res => this.literalsHome = res);
   }
}
