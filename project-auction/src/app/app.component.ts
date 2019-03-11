import { LiteralService } from './i18n/literal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-auction';
  public literals = {};

  constructor(private literalService: LiteralService) {
    this.literals = this.literalService.literals;
   }

}
