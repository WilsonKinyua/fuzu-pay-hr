import { TestBed } from '@angular/core/testing';

import { ActiveStaffService } from './active-staff.service';

describe('ActiveStaffService', () => {
  let service: ActiveStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
