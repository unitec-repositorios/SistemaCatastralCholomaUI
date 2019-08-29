import { TestBed } from '@angular/core/testing';

import { FraccionService } from './fraccion.service';

describe('FraccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FraccionService = TestBed.get(FraccionService);
    expect(service).toBeTruthy();
  });
});
