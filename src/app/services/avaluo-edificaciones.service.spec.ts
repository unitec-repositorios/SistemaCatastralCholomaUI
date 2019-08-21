import { TestBed } from '@angular/core/testing';

import { AvaluoEdificacionesService } from './avaluo-edificaciones.service';

describe('AvaluoEdificacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvaluoEdificacionesService = TestBed.get(AvaluoEdificacionesService);
    expect(service).toBeTruthy();
  });
});
