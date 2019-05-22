import { TestBed } from '@angular/core/testing';

import { FichaUrbanaService } from './ficha-urbana.service';

describe('FichasCatastralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FichaUrbanaService = TestBed.get(FichaUrbanaService);
    expect(service).toBeTruthy();
  });
});
