import { Component, OnInit } from '@angular/core';
import { ThfSelectOption } from '@totvs/thf-ui';

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.scss']
})
export class AddAuctionComponent implements OnInit {
  public bidTypeOptions: Array<ThfSelectOption>;

  constructor() { }

  ngOnInit() {
    this.bidTypeOptions = [
      {label: 'Lance livre', value: 1},
      {label: 'Lance fixo', value: 2}
    ];
  }

}
