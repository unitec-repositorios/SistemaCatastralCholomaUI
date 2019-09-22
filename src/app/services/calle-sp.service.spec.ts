import { TestBed } from '@angular/core/testing';

import { CalleSPService } from './calle-sp.service';

describe('CalleSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalleSPService = TestBed.get(CalleSPService);
    expect(service).toBeTruthy();
  });
});
