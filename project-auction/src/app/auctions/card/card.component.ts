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
  @Input('t-bid_step') bid_step;

  constructor() { }

  ngOnInit() {
  }

  formatBid(type) {
    return (type === 1) ? 'Lance Livre' : 'Lance Fixo';
  }

}
