import { TestBed } from '@angular/core/testing';

import { DrenajeSPService } from './drenaje-sp.service';

describe('DrenajeSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrenajeSPService = TestBed.get(DrenajeSPService);
    expect(service).toBeTruthy();
  });
});
