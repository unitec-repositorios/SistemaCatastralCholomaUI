import { TestBed } from '@angular/core/testing';

import { DatosComplementariosService } from './datos-complementarios.service';

describe('DatosComplementariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosComplementariosService = TestBed.get(DatosComplementariosService);
    expect(service).toBeTruthy();
  });
});
