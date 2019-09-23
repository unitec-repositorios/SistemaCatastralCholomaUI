import { TestBed } from '@angular/core/testing';

import { TelefonoSPService } from './telefono-sp.service';

describe('TelefonoSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelefonoSPService = TestBed.get(TelefonoSPService);
    expect(service).toBeTruthy();
  });
});
