import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SketchComponent } from './sketch/sketch.component';
import { MyAuctionsComponent } from './my-auctions/my-auctions.component';
import { FinishedAuctionsComponent } from './finished-auctions/finished-auctions.component';

import { ThfModule } from '@totvs/thf-ui';
import { AuctionsService } from './auctions.service';
import { SharedModule } from '../shared/shared.module';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { OpenAuctionsComponent } from './open-auctions/open-auctions.component';

@NgModule({
  declarations: [
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent,
    AddAuctionComponent,
    OpenAuctionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThfModule
  ],
  exports: [
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent
  ],
  providers: [AuctionsService]
})
export class AuctionsModule { }
