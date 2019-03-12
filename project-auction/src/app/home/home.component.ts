import { LiteralService } from './../i18n/literal.service';
import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions/auctions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public literals = {};

  constructor(
    private _auctionService: AuctionsService,
    private literalService: LiteralService
    ) {
      this.literals = this.literalService.literals;
    }

  ngOnInit() {
  }

}
