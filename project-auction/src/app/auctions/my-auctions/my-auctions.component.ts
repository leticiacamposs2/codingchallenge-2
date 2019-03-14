import { LiteralService } from './../../i18n/literal.service';
import { AuctionsService } from './../auctions.service';
import { Component, OnInit } from '@angular/core';
import { AuctionsResponse } from '../auctions-response';

@Component({
  selector: 'app-my-auctions',
  templateUrl: './my-auctions.component.html',
  styleUrls: ['./my-auctions.component.scss']
})
export class MyAuctionsComponent implements OnInit {

  public sketchAuctions;
  public literals = {};

  constructor(private _auctionsService: AuctionsService,
              private _literalService: LiteralService) {
    this.literals = this._literalService.literalsAuction;
  }

  ngOnInit() {
    this._auctionsService.getMyAuctions()
    .subscribe(res => {
      this.sketchAuctions = res.auctions;
    });
  }

}
