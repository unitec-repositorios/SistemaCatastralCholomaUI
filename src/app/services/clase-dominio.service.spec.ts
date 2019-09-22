import { TestBed } from '@angular/core/testing';

import { ClaseDominioService } from './clase-dominio.service';

describe('ClaseDominioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaseDominioService = TestBed.get(ClaseDominioService);
    expect(service).toBeTruthy();
  });
});
