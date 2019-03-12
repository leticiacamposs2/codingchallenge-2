import { HttpService } from './services/http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ThfModule } from '@totvs/thf-ui';

@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ThfModule
  ],
  providers: [HttpService]
})
export class SharedModule { }
