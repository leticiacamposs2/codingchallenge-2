import { LiteralService } from './../../i18n/literal.service';
import { AuctionsResponse } from './../auction';
import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})
export class SketchComponent implements OnInit {
  public sketchAuctions: AuctionsResponse;
  private literals = {};

  constructor(
    private _auctionsService: AuctionsService,
    private literalService: LiteralService
    ) {
      this.literals = this.literalService.literalsAuction['sketch'];
    }

  ngOnInit() {

    this._auctionsService.getSketchAuctions().subscribe( response => {
      this.sketchAuctions = response;

    });
  }

}
