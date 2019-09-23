import { TestBed } from '@angular/core/testing';

import { AguaSPService } from './agua-sp.service';

describe('AguaSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AguaSPService = TestBed.get(AguaSPService);
    expect(service).toBeTruthy();
  });
});
