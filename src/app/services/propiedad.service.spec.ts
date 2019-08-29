import { TestBed } from '@angular/core/testing';

import { PropiedadService } from './propiedad.service';

describe('PropiedadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropiedadService = TestBed.get(PropiedadService);
    expect(service).toBeTruthy();
  });
});
