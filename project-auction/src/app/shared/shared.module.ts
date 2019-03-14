import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { HttpService } from './services/http.service';

import { ThfModule } from '@totvs/thf-ui';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ThfModule
  ],
  exports: [
    CardComponent
  ],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
