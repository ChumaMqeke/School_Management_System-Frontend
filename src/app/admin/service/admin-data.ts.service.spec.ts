import { TestBed } from '@angular/core/testing';

import { AdminDataTsService } from './admin-data.ts.service';

describe('AdminDataTsService', () => {
  let service: AdminDataTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDataTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
