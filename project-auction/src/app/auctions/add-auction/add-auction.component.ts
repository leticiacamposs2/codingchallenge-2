import { AuctionsService } from './../auctions.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ThfSelectOption, ThfNotificationService } from '@totvs/thf-ui';

import { LiteralService } from 'src/app/i18n/literal.service';
import { Auction } from '../auction';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.scss']
})
export class AddAuctionComponent implements OnInit {

  public literals = {};
  public bidTypeOptions: Array<ThfSelectOption>;
  public formAuction: FormGroup;
  public newAuction: Auction;

  constructor(private literalService: LiteralService,
              private formBuilder: FormBuilder,
              private auctionsService: AuctionsService,
              private thfNotificationService: ThfNotificationService,
              private _activateRoute: ActivatedRoute) {
    this.literals = this.literalService.literalsAuction;
  }

  ngOnInit() {

    this.bidTypeOptions = [
      { label: 'Lance livre', value: 1},
      { label: 'Lance fixo', value: 2}
    ];
    this.formAuction = this.formBuilder.group({
      name: ['',[Validators.required]],
      base_price: [0,[Validators.required,Validators.min(1)]],
      bid_type: [1,[Validators.required]],
      bid_step: [0],
      photo: ['']
    });

  //  console.log(this._activateRoute.snapshot.params.id);
    const id = this._activateRoute.snapshot.params.id;
    if(id) {
        this.auctionsService.getMyAuctionsById(id)
          .subscribe(response => console.log(response));
      }
  }

  save() {
    this.newAuction = this.formAuction.getRawValue();

    this.auctionsService.postAddAuctions(this.newAuction)
    .subscribe(() => {
      this.thfNotificationService.success('Leilão criado com sucesso!');
    },
      err => this.thfNotificationService.error(err)
    );
  }

  isFormValid() {
    return !this.formAuction.valid;
  }

}
