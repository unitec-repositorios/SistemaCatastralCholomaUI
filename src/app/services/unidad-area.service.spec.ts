import { TestBed } from '@angular/core/testing';

import { UnidadAreaService } from './unidad-area.service';

describe('UnidadAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnidadAreaService = TestBed.get(UnidadAreaService);
    expect(service).toBeTruthy();
  });
});
