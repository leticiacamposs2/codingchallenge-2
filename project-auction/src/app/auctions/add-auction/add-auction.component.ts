import { Component, OnInit } from '@angular/core';
import { ThfSelectOption } from '@totvs/thf-ui';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.scss']
})
export class AddAuctionComponent implements OnInit {
  public bidTypeOptions: Array<ThfSelectOption>;
  public formAuction: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bidTypeOptions = [
      {label: 'Lance livre', value: 1},
      {label: 'Lance fixo', value: 2}
    ];

    this.formAuction = this.formBuilder.group({
      name: '',
    });
  }

  save() {
    console.log(this.formAuction);
  }

  isFormValid() {
    return !this.formAuction.valid;
    //return this.formAuction.status === 'INVALID' ? true : false;
  }

}
