import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SketchComponent } from './sketch/sketch.component';
import { MyAuctionsComponent } from './my-auctions/my-auctions.component';
import { FinishedAuctionsComponent } from './finished-auctions/finished-auctions.component';

import { ThfModule } from '@totvs/thf-ui';

import { AuctionsService } from './auctions.service';
import { SharedModule } from '../shared/shared.module';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { OpenAuctionsComponent } from './open-auctions/open-auctions.component';
import { AuctionRoutingModule } from './auction-routing.module';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent,
    AddAuctionComponent,
    OpenAuctionsComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuctionRoutingModule,
    ThfModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent
  ],
  providers: [AuctionsService]
})
export class AuctionsModule { }
