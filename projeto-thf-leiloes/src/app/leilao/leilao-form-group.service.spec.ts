import { TestBed, inject } from '@angular/core/testing';
import { LeilaoFormGroupService } from './leilao-form-group.service';

describe('LeilaoFormGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeilaoFormGroupService]
    });
  });

  it('should be created', inject([LeilaoFormGroupService], (service: LeilaoFormGroupService) => {
    expect(service).toBeTruthy();
  }));
});
