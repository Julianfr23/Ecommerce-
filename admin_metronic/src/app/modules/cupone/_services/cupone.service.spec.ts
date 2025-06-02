import { TestBed } from '@angular/core/testing';

import { CuponeService } from './cupone.service';

describe('CuponeService', () => {
  let service: CuponeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuponeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
