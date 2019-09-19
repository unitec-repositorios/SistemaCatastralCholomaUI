import { TestBed } from '@angular/core/testing';

import { NaturalezaJuridicaService } from './naturaleza-juridica.service';

describe('NaturalezaJuridicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NaturalezaJuridicaService = TestBed.get(NaturalezaJuridicaService);
    expect(service).toBeTruthy();
  });
});
