import { AddAuctionComponent } from './add-auction/add-auction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OpenAuctionsComponent } from './open-auctions/open-auctions.component';
import { HomeComponent } from '../home/home.component';

const auctionRoutes: Routes = [
  { path: 'auctions/home', component: HomeComponent },
  { path: 'auctions/add-auction', component: AddAuctionComponent },
  { path: 'auctions/open-auction', component: OpenAuctionsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(auctionRoutes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule {}
