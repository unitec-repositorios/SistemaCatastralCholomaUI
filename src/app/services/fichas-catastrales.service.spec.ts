import { TestBed } from '@angular/core/testing';

import { FichasCatastralesService } from './fichas-catastrales.service';

describe('FichasCatastralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FichasCatastralesService = TestBed.get(FichasCatastralesService);
    expect(service).toBeTruthy();
  });
});
