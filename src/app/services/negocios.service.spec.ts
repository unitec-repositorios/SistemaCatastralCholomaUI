import { TestBed } from '@angular/core/testing';

import { NegociosService } from './negocios.service';

describe('NegociosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NegociosService = TestBed.get(NegociosService);
    expect(service).toBeTruthy();
  });
});
