import { TestBed } from '@angular/core/testing';

import { PredioService } from './predio.service';

describe('PredioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredioService = TestBed.get(PredioService);
    expect(service).toBeTruthy();
  });
});
