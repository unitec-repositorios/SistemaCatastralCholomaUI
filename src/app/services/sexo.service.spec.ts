import { TestBed } from '@angular/core/testing';

import { SexoService } from './sexo.service';

describe('SexoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SexoService = TestBed.get(SexoService);
    expect(service).toBeTruthy();
  });
});
