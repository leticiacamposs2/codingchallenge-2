import { AuctionsService } from './../auctions.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ThfSelectOption, ThfNotificationService } from '@totvs/thf-ui';

import { LiteralService } from 'src/app/i18n/literal.service';
import { Auction } from '../auction';

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
              private thfNotificationService: ThfNotificationService) {
    this.literals = this.literalService.literalsAuction;
  }

  ngOnInit() {

    this.bidTypeOptions = [
      { label: 'Lance livre', value: 1},
      { label: 'Lance fixo', value: 2}
    ];
    this.formAuction = this.formBuilder.group({
      name: ['',
        [
          Validators.required
        ]
      ],
      bid_price: [0,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],
      bid_type: [1,
        [
          Validators.required
        ]
      ],
      bid_step: [0],
      photo: ['']
    });
  }

  save() {
    this.newAuction = this.formAuction.getRawValue();

    // this.newAuction._id = 'sada6465sd46asd8dse';
    // this.newAuction.status = 0;

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
