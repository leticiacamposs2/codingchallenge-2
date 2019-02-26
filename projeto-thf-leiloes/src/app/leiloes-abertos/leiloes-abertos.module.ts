import { FormsModule } from '@angular/forms';
import { ThfModule } from '@totvs/thf-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeiloesAbertosComponent } from './leiloes-abertos.component';

@NgModule({
  imports: [
    ThfModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    LeiloesAbertosComponent
  ],
  providers: []
})
export class LeiloesAbertosModule { }
