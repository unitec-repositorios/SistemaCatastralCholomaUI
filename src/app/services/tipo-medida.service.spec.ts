import { TestBed } from '@angular/core/testing';

import { TipoMedidaService } from './tipo-medida.service';

describe('TipoMedidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoMedidaService = TestBed.get(TipoMedidaService);
    expect(service).toBeTruthy();
  });
});
