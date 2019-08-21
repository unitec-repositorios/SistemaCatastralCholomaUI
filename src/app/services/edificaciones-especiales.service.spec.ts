import { TestBed } from '@angular/core/testing';

import { EdificacionesEspecialesService } from './edificaciones-especiales.service';

describe('EdificacionesEspecialesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdificacionesEspecialesService = TestBed.get(EdificacionesEspecialesService);
    expect(service).toBeTruthy();
  });
});
