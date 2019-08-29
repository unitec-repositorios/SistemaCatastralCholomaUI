import { TestBed } from '@angular/core/testing';

import { ColindantesService } from './colindantes.service';

describe('ColindantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColindantesService = TestBed.get(ColindantesService);
    expect(service).toBeTruthy();
  });
});
