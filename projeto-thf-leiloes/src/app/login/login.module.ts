import { ThfModule } from '@totvs/thf-ui';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginService } from '../services/login.service';
import { SharedModule } from './../shared/shared.module';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';

@NgModule({
  imports: [
    ThfModule,
    FormsModule,
    ThfPageLoginModule,
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    ThfPageLoginModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
