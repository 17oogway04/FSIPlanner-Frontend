import { TestBed } from '@angular/core/testing';

import { AcctMovementService } from './acct-movement.service';

describe('AcctMovementService', () => {
  let service: AcctMovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcctMovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
