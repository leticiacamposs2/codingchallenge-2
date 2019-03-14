import { Component, OnInit } from '@angular/core';
import { ThfMenuItem } from '@totvs/thf-ui';

import { LiteralService } from 'src/app/i18n/literal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public literals = {};
  public menuAuctions: Array<ThfMenuItem>;

  constructor(private literalService: LiteralService) {
    this.literals = this.literalService.literalsHome;
  }

  ngOnInit() {
    this.menuAuctions = [
      { label: this.literals['myAuctions'], link: '/auction'},
      { label: this.literals['addAuctions'], link: '/auction/add-auction'},
      { label: this.literals['openAuctions'], link: '/auction/open-auctions'}
    ]
  }

}
