import { TestBed } from '@angular/core/testing';

import { IreService } from './ire.service';

describe('IreService', () => {
  let service: IreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
