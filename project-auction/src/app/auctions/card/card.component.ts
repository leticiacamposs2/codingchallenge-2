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

  public bid_step;
  @Input('t-bid_step') set formatBidStep(value: number) {
    this.bid_step = value || '';
  }

  constructor(private _auctionsService: AuctionsService) { }

  ngOnInit() { }

  formatBid(type) {
    return (type === 1) ? 'Lance Livre' : 'Lance Fixo';
  }

}
