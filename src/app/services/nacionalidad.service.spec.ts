import { TestBed } from '@angular/core/testing';

import { NacionalidadService } from './nacionalidad.service';

describe('NacionalidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NacionalidadService = TestBed.get(NacionalidadService);
    expect(service).toBeTruthy();
  });
});
