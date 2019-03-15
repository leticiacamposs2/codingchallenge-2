import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LiteralService } from './../../i18n/literal.service';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})

export class SketchComponent implements OnInit {

  public sketchAuctions;
  public literals = {};

  constructor(
    private router: Router,
    private _auctionsService: AuctionsService,
    private _literalService: LiteralService
    ) {
    this.literals = this._literalService.literalsAuction;
  }

  ngOnInit() {
    this._auctionsService.getSketchsAuctions()
    .subscribe(res => {
      this.sketchAuctions = res.auctions;
    });
  }

  manageEditAuction(event) {
    //this.router.navigate(['auction/add-auction', event.id]);
    console.log(event);
  }

}
