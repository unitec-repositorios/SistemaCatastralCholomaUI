import { TestBed } from '@angular/core/testing';

import { RecursosHidricosService } from './recursos-hidricos.service';

describe('RecursosHidricosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecursosHidricosService = TestBed.get(RecursosHidricosService);
    expect(service).toBeTruthy();
  });
});
