import { Component } from '@angular/core';
import { LiteralService } from './i18n/literal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-auction';
  public literals = {};

  constructor(private literalsService: LiteralService) {
    this.literals = this.literalsService.literals;
  }
}
