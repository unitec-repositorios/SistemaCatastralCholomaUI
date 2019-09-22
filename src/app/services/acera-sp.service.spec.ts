import { TestBed } from '@angular/core/testing';

import { AceraSPService } from './acera-sp.service';

describe('AceraSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AceraSPService = TestBed.get(AceraSPService);
    expect(service).toBeTruthy();
  });
});
