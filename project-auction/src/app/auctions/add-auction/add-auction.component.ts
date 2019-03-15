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
  private _id: string;

  constructor(
    private literalService: LiteralService,
    private formBuilder: FormBuilder,
    private _auctionsService: AuctionsService,
    private thfNotificationService: ThfNotificationService,
    private _activateRoute: ActivatedRoute
    ) {
    this.literals = this.literalService.literalsAuction;
  }

  ngOnInit() {

    this.bidTypeOptions = [
      { label: 'Lance livre', value: 1 },
      { label: 'Lance fixo', value: 2 }
    ];
    this.formAuction = this.formBuilder.group({
      name: ['', [Validators.required]],
      base_price: [0, [Validators.required, Validators.min(1)]],
      bid_type: [1, [Validators.required]],
      bid_step: [0],
      photo: ['']
    });

    this._id = this._activateRoute.snapshot.params.id;
    if (this._id) {
      this._auctionsService.getMyAuctionsById(this._id)
        .subscribe(response => {
          this.formAuction.setValue({
            name: response.name,
            base_price: response.base_price,
            bid_type: response.bid_type,
            bid_step: response.bid_step,
            photo: response.photo
          });
        });
    }
  }

  save() {
    if (this._id) {
      this._auctionsService.editAuction(this._id, this.formAuction.value)
        .subscribe(response => console.log(response));
    } else {
      this.newAuction = this.formAuction.getRawValue();
      this._auctionsService.postAddAuctions(this.newAuction)
        .subscribe(() => {
          this.thfNotificationService.success('Leilão criado com sucesso!');
        },
          err => this.thfNotificationService.error(err)
        );
    }
  }

  isFormValid() {
    return !this.formAuction.valid;
  }

}
