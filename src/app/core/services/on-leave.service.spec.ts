import { TestBed } from '@angular/core/testing';

import { OnLeaveService } from './on-leave.service';

describe('OnLeaveService', () => {
  let service: OnLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
