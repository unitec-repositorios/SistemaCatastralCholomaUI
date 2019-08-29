import { TestBed } from '@angular/core/testing';

import { DatosDesarrolloService } from './datos-desarrollo.service';

describe('DatosDesarrolloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosDesarrolloService = TestBed.get(DatosDesarrolloService);
    expect(service).toBeTruthy();
  });
});
