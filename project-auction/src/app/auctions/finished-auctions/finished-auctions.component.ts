import { Component, OnInit } from '@angular/core';

import { LiteralService } from 'src/app/i18n/literal.service';

@Component({
  selector: 'app-finished-auctions',
  templateUrl: './finished-auctions.component.html',
  styleUrls: ['./finished-auctions.component.scss']
})
export class FinishedAuctionsComponent implements OnInit {

  public literals = {};

  constructor(private _literalService: LiteralService) {
    this.literals = this._literalService.literalsAuction;
  }

  ngOnInit() {
  }

}
