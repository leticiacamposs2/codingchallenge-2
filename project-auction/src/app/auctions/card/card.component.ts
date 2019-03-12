import { Component, OnInit, Input } from '@angular/core';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('t-name') name;
  @Input('t-base_price') base_price;
  @Input('t-photo_url') photo;
  @Input('t-bid_type') bid_type;

  constructor(private _auctionsService: AuctionsService) { }

  ngOnInit() {
    console.log(this.name);
  }

  formatBid(type) {
    debugger;
    return (type === 1) ? 'Lance Livre' : 'Lance Fixo';
  }

}
