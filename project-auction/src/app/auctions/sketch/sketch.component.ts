import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})
export class SketchComponent implements OnInit {
  public sketchAuctions: any;
  public literals = {};

  constructor(private _auctionsService: AuctionsService) { }

  ngOnInit() {
    this._auctionsService.getSketchAuctions().subscribe( response => {
      this.sketchAuctions = response;
    });

  }

}
