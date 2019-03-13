import { LiteralService } from './../i18n/literal.service';
import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions/auctions.service';
import { ThfMenuItem } from '@totvs/thf-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
