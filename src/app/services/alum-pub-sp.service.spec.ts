import { TestBed } from '@angular/core/testing';

import { AlumPubSPService } from './alum-pub-sp.service';

describe('AlumPubSPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumPubSPService = TestBed.get(AlumPubSPService);
    expect(service).toBeTruthy();
  });
});
