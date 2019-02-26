import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeiloesComponent } from './leiloes.component';

describe('LeiloesComponent', () => {
  let component: LeiloesComponent;
  let fixture: ComponentFixture<LeiloesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeiloesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeiloesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
