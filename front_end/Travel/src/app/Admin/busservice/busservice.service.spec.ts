import { TestBed } from '@angular/core/testing';

import { BusserviceService } from './busservice.service';

describe('BusserviceService', () => {
  let service: BusserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
