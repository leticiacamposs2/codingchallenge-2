import { EditLeilaoComponent } from './edit-leilao/edit-leilao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ThfModule } from '@totvs/thf-ui';
import { ThfFieldModule } from '@totvs/thf-ui/components/thf-upload';

import { LeiloesComponent } from './leiloes.component';
import { LeilaoLookupService } from '../services/leilao-lookup.service';
import { LeiloesService } from '../services/leiloes.service';
import { LeilaoFormGroupService } from '../services/leilao-form-group-service';

@NgModule({
  imports: [
    CommonModule,
    ThfModule,
    ThfFieldModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    LeiloesComponent,
    EditLeilaoComponent
  ],
  exports: [
    LeiloesComponent
  ],
  providers: [ LeilaoLookupService, LeiloesService, LeilaoFormGroupService],
})
export class LeiloesModule { }
