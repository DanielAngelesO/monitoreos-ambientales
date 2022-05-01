import { TestBed } from '@angular/core/testing';

import { DisparadorDataService } from './disparador-data.service';

describe('DisparadorDataService', () => {
  let service: DisparadorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisparadorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
