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
  public sketchAuctionsArr = [];
  public literals = {};

  constructor(private _auctionsService: AuctionsService) { }

  ngOnInit() {

    this._auctionsService.getSketchAuctions().subscribe( response => {
      this.sketchAuctions = response;

      this.sketchAuctionsArr = this.sketchAuctions.auctions.filter( filtro => {
        return filtro.status === 0;
      });
    });
  }

}
