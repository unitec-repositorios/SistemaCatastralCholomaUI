import { TestBed } from '@angular/core/testing';

import { PisoService } from './piso.service';

describe('PisoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PisoService = TestBed.get(PisoService);
    expect(service).toBeTruthy();
  });
});
