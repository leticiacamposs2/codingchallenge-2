import { LiteralService } from './../../i18n/literal.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThfNotificationService } from '@totvs/thf-ui';

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

  constructor(
    private _literalService: LiteralService,
    private thfNotificationService: ThfNotificationService
    ) {
    this.literals = this._literalService.literalsShared;
   }

  ngOnInit() {
  }

  formatBid(type) {
    return (type === 1) ? 'Lance Livre' : 'Lance Fixo';
  }

  emitAuctionInfo(action: string) {
    const data = {
      id: this.id,
      my_action: action,
    };

    this.auction_info.emit(data);
  }

  emitAuctionToDelete() {
    this.emitAuctionInfo('delete');
    this.thfNotificationService.success('Leilão excluído com sucesso!');
  }

}
