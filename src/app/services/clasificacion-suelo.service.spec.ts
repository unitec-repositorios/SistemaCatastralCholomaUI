import { TestBed } from '@angular/core/testing';

import { ClasificacionSueloService } from './clasificacion-suelo.service';

describe('ClasificacionSueloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasificacionSueloService = TestBed.get(ClasificacionSueloService);
    expect(service).toBeTruthy();
  });
});
