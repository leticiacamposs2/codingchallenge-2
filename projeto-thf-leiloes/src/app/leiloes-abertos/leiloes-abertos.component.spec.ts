import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeiloesAbertosComponent } from './leiloes-abertos.component';

describe('LeiloesAbertosComponent', () => {
  let component: LeiloesAbertosComponent;
  let fixture: ComponentFixture<LeiloesAbertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeiloesAbertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeiloesAbertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
