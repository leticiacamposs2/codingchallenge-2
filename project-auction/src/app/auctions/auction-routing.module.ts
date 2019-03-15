
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { HomeComponent } from './../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenAuctionsComponent } from './open-auctions/open-auctions.component';
import { MenuComponent } from './menu/menu.component';

const auctionRoutes: Routes = [
  { path: 'auction', component: MenuComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'add-auction', component: AddAuctionComponent },
      { path: 'add-auction/:id', component: AddAuctionComponent },
      { path: 'open-auctions', component: OpenAuctionsComponent }
    ]
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(auctionRoutes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule {

}
