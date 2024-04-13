import { TestBed } from '@angular/core/testing';

import { SslService } from './ssl.service';

describe('SslService', () => {
  let service: SslService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SslService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
