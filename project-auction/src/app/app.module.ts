import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThfModule } from '@totvs/thf-ui';
import { ThfI18nModule } from '@totvs/thf-ui/services/thf-i18n';
import { ThfI18nConfig } from '@totvs/thf-ui/services/thf-i18n';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';

import { AppRoutingModule } from './app-routing.module';
import { AuctionsModule } from './auctions/auctions.module';
import { AppComponent } from './app.component';
import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';
import { homePt } from './i18n/home-pt';
import { auctionPt } from './i18n/auction-pt';
import { sharedPt } from './i18n/shared-pt';
import { LiteralService } from './i18n/literal.service';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { InterceptorModule } from './interceptor/interceptor.module';

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
    auction: {
      'pt-BR': auctionPt
    },
    shared: {
      'pt-BR': sharedPt
    },
    home: {
      'pt-BR': homePt
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    ThfI18nModule.config(i18nConfig),
    SharedModule,
    AuctionsModule,
    ThfPageLoginModule,
    InterceptorModule
  ],
  providers: [
    LiteralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
