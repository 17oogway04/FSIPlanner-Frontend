import { TestBed } from '@angular/core/testing';

import { DisabilityInsService } from './disability-ins.service';

describe('DisabilityInsService', () => {
  let service: DisabilityInsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisabilityInsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
