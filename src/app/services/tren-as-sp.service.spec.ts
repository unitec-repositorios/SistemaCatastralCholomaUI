import { TestBed } from '@angular/core/testing';

import { TrenAsSPService } from './tren-as-sp.service';

describe('TrenAsSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrenAsSPService = TestBed.get(TrenAsSPService);
    expect(service).toBeTruthy();
  });
});
