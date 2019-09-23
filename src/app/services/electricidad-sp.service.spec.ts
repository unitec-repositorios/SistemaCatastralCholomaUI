import { TestBed } from '@angular/core/testing';

import { ElectricidadSPService } from './electricidad-sp.service';

describe('ElectricidadSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectricidadSPService = TestBed.get(ElectricidadSPService);
    expect(service).toBeTruthy();
  });
});
