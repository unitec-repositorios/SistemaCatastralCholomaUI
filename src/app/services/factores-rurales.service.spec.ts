import { TestBed } from '@angular/core/testing';

import { FactoresRuralesService } from './factores-rurales.service';

describe('FactoresRuralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactoresRuralesService = TestBed.get(FactoresRuralesService);
    expect(service).toBeTruthy();
  });
});
