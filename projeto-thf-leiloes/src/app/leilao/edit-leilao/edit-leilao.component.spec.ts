import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeilaoComponent } from './edit-leilao.component';

describe('EditLeilaoComponent', () => {
  let component: EditLeilaoComponent;
  let fixture: ComponentFixture<EditLeilaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLeilaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLeilaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
