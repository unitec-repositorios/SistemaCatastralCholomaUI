import { TestBed } from '@angular/core/testing';

import { ServiciosPublicosService } from './servicios-publicos.service';

describe('ServiciosPublicosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosPublicosService = TestBed.get(ServiciosPublicosService);
    expect(service).toBeTruthy();
  });
});
