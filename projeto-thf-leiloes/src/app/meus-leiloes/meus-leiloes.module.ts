import { MeusLeiloesComponent } from './meus-leiloes.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThfModule } from '@totvs/thf-ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThfModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    MeusLeiloesComponent
  ],
  providers: []
})
export class MeusLeiloesModule { }
