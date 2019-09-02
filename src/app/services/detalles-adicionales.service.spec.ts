import { TestBed } from '@angular/core/testing';

import { DetallesAdicionalesService } from './detalles-adicionales.service';

describe('DetallesAdicionalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetallesAdicionalesService = TestBed.get(DetallesAdicionalesService);
    expect(service).toBeTruthy();
  });
});
