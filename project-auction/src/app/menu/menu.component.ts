import { ThfMenuItem } from '@totvs/thf-ui';
import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions/auctions.service';
import { LiteralService } from '../i18n/literal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuAuctions: Array<ThfMenuItem>;
  public literals = {};

  constructor(
    private _auctionService: AuctionsService,
    private _literalService: LiteralService
    ) {
      this.literals = this._literalService.literals;
    }

  ngOnInit() {
    this.menuAuctions = [
      {label: this._literalService.literals['myAuctions'], link: '/'},
      {label: this._literalService.literals['addAuction'], link: '/'},
      {label: this._literalService.literals['openAuctions'], link: '/'},
    ];
  }

}
