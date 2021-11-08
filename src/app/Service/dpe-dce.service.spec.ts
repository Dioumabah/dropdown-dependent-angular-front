import { TestBed } from '@angular/core/testing';

import { DpeDceService } from './dpe-dce.service';

describe('DpeDceService', () => {
  let service: DpeDceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DpeDceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
