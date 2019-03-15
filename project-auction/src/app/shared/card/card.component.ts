import { LiteralService } from './../../i18n/literal.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('t-name') name;
  @Input('t-base_price') base_price;
  @Input('t-photo') photo;
  @Input('t-bid_type') bid_type;
  @Input('t-id') id;

  public bid_step;

  @Input('t-bid_step') set formatBidStep(value: number) {
    this.bid_step = value || '';
  }

  @Output('t-auction-info') auction_info = new EventEmitter<any>();

  public literals = {};

  constructor(private _literalService: LiteralService) {
    this.literals = this._literalService.literalsShared;
   }

  ngOnInit() {
  }

  formatBid(type) {
    return (type === 1) ? 'Lance Livre' : 'Lance Fixo';
  }

  emitAuctionInfo() {
    const data = {
      id: this.id,
      name: this.name,
      bid_step: this.bid_step,
      bid_type: this.bid_type,
      base_price: this.base_price,
      photo: this.photo
    };

    this.auction_info.emit(data);
  }
}
