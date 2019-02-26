import { LoginComponent } from './login/login.component';
import { LeiloesAbertosComponent } from './leiloes-abertos/leiloes-abertos.component';
import { MeusLeiloesModule } from './meus-leiloes/meus-leiloes.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThfModule } from '@totvs/thf-ui';
import { ThfI18nConfig, ThfI18nModule } from '@totvs/thf-ui/services/thf-i18n';
import { ThfTemplatesModule } from '@totvs/thf-templates';

import { generalPt } from 'src/literals/i18n/general-pt';

import { AppComponent } from './app.component';
import { LeiloesModule } from './leilao/leiloes.module';
import { AppRoutingModule } from './app-routing.module';


const i18nConfig: ThfI18nConfig = {
  default: {
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt
    },
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LeiloesAbertosComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LeiloesModule,
    MeusLeiloesModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ThfModule,
    ThfI18nModule.config(i18nConfig),
    ThfTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
