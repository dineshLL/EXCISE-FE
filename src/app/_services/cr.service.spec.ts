import { TestBed, inject } from '@angular/core/testing';

import { CrService } from './cr.service';

describe('CrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrService]
    });
  });

  it('should be created', inject([CrService], (service: CrService) => {
    expect(service).toBeTruthy();
  }));
});
