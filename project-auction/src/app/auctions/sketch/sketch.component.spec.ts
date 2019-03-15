import { ThfModule } from '@totvs/thf-ui';
import { LiteralService } from 'src/app/i18n/literal.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchComponent } from './sketch.component';
import { Component } from '@angular/core';
import { AuctionsService } from '../auctions.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

function MockComponent(options: Component) {
  const metadata: Component = {
    selector: options.selector,
    template: options.template || '',
    inputs: options.inputs,
    outputs: options.outputs
  };

  class Mock { }

  return Component(metadata)(Mock as any);
}

  // tslint:disable-next-line:max-classes-per-file
class MockAuctionsService {
    getSketchsAuctions() {
      return of();
    }
   }

  // tslint:disable-next-line:max-classes-per-file
class MockLiteralService {
  public literalsAuction = {
    sketch: {
      titleSketch: 'Rascunhos'
    },
  };
}

fdescribe('SketchComponent', () => {
  let component: SketchComponent;
  let fixture: ComponentFixture<SketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SketchComponent,
                     MockComponent({selector: 'app-card', inputs: ['t-id', 't-name', 't-base_price',
                                                                   't-photo', 't-bid_type', 't-bid_step'],
                                                                    outputs: ['t-auction-info']})
                    ],
                    imports: [RouterTestingModule.withRoutes([]), ThfModule],
                    providers: [{provide: AuctionsService, useClass: MockAuctionsService},
                                {provide: LiteralService, useClass: MockLiteralService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
