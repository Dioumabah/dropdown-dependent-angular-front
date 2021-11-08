import { TestBed } from '@angular/core/testing';

import { ServicesFrontEndService } from './services-front-end.service';

describe('ServicesFrontEndService', () => {
  let service: ServicesFrontEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesFrontEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
