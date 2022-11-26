import { TestBed } from '@angular/core/testing';

import { CountCalculateService } from './count-calculate.service';

describe('CountCalculateService', () => {
  let service: CountCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
