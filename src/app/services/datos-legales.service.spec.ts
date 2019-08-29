import { TestBed } from '@angular/core/testing';

import { DatosLegalesService } from './datos-legales.service';

describe('DatosLegalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosLegalesService = TestBed.get(DatosLegalesService);
    expect(service).toBeTruthy();
  });
});
