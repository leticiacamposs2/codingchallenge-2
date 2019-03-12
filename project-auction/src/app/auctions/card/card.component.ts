import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public arrCards = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private _auctionsService: AuctionsService) { }

  ngOnInit() {
    this._auctionsService.getAllAuctions().subscribe( response => {
      console.log(response);
    });
  }

}
