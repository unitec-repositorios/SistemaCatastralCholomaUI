import { TestBed } from '@angular/core/testing';

import { TipoEmpresaService } from './tipo-empresa.service';

describe('TipoEmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoEmpresaService = TestBed.get(TipoEmpresaService);
    expect(service).toBeTruthy();
  });
});
