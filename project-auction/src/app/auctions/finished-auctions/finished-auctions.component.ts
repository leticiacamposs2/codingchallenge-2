import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions.service';
import { LiteralService } from 'src/app/i18n/literal.service';

@Component({
  selector: 'app-finished-auctions',
  templateUrl: './finished-auctions.component.html',
  styleUrls: ['./finished-auctions.component.scss']
})
export class FinishedAuctionsComponent implements OnInit {
  private literals = {};

  constructor(
    private _auctionsService: AuctionsService,
    private literalService: LiteralService
  ) {
    this.literals = this.literalService.literalsAuction['finished'];
  }

  ngOnInit() {
  }

}
