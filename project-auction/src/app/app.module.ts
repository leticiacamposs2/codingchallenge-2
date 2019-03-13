import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThfI18nModule, ThfI18nConfig } from '@totvs/thf-ui/services/thf-i18n';
import { ThfModule } from '@totvs/thf-ui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LiteralService } from './i18n/literal.service';
import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';
import { auctionPt } from './i18n/auction-pt';

import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AuctionsModule } from './auctions/auctions.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const i18nConfig: ThfI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn
    },
    auctions: {
      'pt-BR': auctionPt
    },
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    ThfI18nModule.config(i18nConfig),
    SharedModule,
    AuctionsModule
  ],
  providers: [LiteralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
