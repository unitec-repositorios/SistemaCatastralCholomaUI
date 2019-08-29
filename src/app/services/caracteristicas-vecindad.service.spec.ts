import { TestBed } from '@angular/core/testing';

import { CaracteristicasVecindadService } from './caracteristicas-vecindad.service';

describe('CaracteristicasVecindadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaracteristicasVecindadService = TestBed.get(CaracteristicasVecindadService);
    expect(service).toBeTruthy();
  });
});
