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
    this.getAuctions();
  }

  getAuctions() {
    this._auctionsService.getSketchsAuctions()
    .subscribe(response => {
      this.sketchAuctions = response.auctions;
    });
  }

  manageAuction(event) {
    if (event.my_action === 'delete') {
      this._auctionsService.deleteAuction(event.id)
        .subscribe(response => {
          console.log(response);
        }, error => {
          if (error.status === 400) {
            this.getAuctions();
            console.log('Oloko bixo! Deu ruim, mas ta de boa!');
          }
        });
    } else if (event.my_action === 'activate') {
      // Ativiar leilão
    } else {
      this.router.navigate(['auction/add-auction', event.id]);
    }
  }

}
