import { TestBed } from '@angular/core/testing';

import { CaracteristicasPropiedadService } from './caracteristicas-propiedad.service';

describe('CaracteristicasPropiedadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaracteristicasPropiedadService = TestBed.get(CaracteristicasPropiedadService);
    expect(service).toBeTruthy();
  });
});
