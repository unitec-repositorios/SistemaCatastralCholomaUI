import { TestBed } from '@angular/core/testing';

import { AvaluoRuralService } from './avaluo-rural.service';

describe('AvaluoRuralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvaluoRuralService = TestBed.get(AvaluoRuralService);
    expect(service).toBeTruthy();
  });
});
