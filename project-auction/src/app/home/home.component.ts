import { Component, OnInit } from '@angular/core';

import { LiteralService } from './../i18n/literal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public literals = {};

  constructor(private literalService: LiteralService) {
    this.literals = this.literalService.literalsHome;
  }

  ngOnInit() {
  }

}
