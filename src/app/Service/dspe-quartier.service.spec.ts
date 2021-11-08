import { TestBed } from '@angular/core/testing';

import { DspeQuartierService } from './dspe-quartier.service';

describe('DspeQuartierService', () => {
  let service: DspeQuartierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DspeQuartierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
