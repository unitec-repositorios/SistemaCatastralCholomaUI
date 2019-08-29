import { TestBed } from '@angular/core/testing';

import { AvaluoUrbanoService } from './avaluo-urbano.service';

describe('AvaluoUrbanoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvaluoUrbanoService = TestBed.get(AvaluoUrbanoService);
    expect(service).toBeTruthy();
  });
});
