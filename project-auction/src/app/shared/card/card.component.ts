import { LiteralService } from './../../i18n/literal.service';
import { Component, OnInit, Input } from '@angular/core';

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

  public bid_step;

  @Input('t-bid_step') set formatBidStep(value: number) {
    this.bid_step = value || '';
  }

  public literals = {};

  constructor(private _literalService: LiteralService) {
    this.literals = this._literalService.literalsShared;
   }

  ngOnInit() {
  }

  formatBid(type) {
    return (type === 1) ? 'Lance Livre' : 'Lance Fixo';
  }
}
