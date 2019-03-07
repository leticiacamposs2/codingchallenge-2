import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ThfModule } from '@totvs/thf-ui';
import { ThfStorageModule } from '@totvs/thf-storage';

import { AuthGuardService } from '../services/auth-guard.service';
import { GenericService } from '../services/generic-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ThfModule,
    ThfStorageModule.forRoot({
      name: 'projeto-thf-leiloes',
      storeName: 'mystore',
      driverOrder: ['localstorage']
    })
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,

    ThfModule,
    ThfStorageModule
  ],
  providers: [
    AuthGuardService,
    GenericService
  ]
})
export class SharedModule { }
