import { Component, OnInit } from '@angular/core';
import { LiteralService } from 'src/app/i18n/literal.service';

@Component({
  selector: 'app-open-auctions',
  templateUrl: './open-auctions.component.html',
  styleUrls: ['./open-auctions.component.scss']
})
export class OpenAuctionsComponent implements OnInit {

  public literals = {};

  constructor(private literalService: LiteralService) {
    this.literals = this.literalService.literalsAuction;
  }

  ngOnInit() {
  }

}
