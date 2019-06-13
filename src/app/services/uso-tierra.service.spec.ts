import { TestBed } from '@angular/core/testing';

import { UsoTierraService } from './uso-tierra.service';

describe('UsoTierraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsoTierraService = TestBed.get(UsoTierraService);
    expect(service).toBeTruthy();
  });
});
