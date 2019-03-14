import { Auction } from 'src/app/auctions/auction';
import { LiteralService } from './../../i18n/literal.service';
import { Component, OnInit } from '@angular/core';

import { AuctionsService } from '../auctions.service';
import { AuctionsResponse } from './../auctions-response';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})

export class SketchComponent implements OnInit {

  public sketchAuctions;
  public literals = {};

  constructor(private _auctionsService: AuctionsService,
              private _literalService: LiteralService) {
    this.literals = this._literalService.literalsAuction;
  }

  ngOnInit() {
    this._auctionsService.getSketchsAuctions()
    .subscribe(res => {
      this.sketchAuctions = res.auctions;
    });
  }

  editAuction(event) {
    console.log(event);
  }

}
