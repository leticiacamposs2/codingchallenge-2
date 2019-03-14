import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThfModule } from '@totvs/thf-ui';

import { SharedModule } from '../shared/shared.module';
import { AuctionRoutingModule } from './auction-routing.module';
import { FinishedAuctionsComponent } from './finished-auctions/finished-auctions.component';
import { SketchComponent } from './sketch/sketch.component';
import { AuctionsService } from './auctions.service';
import { MyAuctionsComponent } from './my-auctions/my-auctions.component';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { OpenAuctionsComponent } from './open-auctions/open-auctions.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent,
    AddAuctionComponent,
    OpenAuctionsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThfModule,
    AuctionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent
  ],
  providers: [
    AuctionsService
  ]
})

export class AuctionsModule {}
