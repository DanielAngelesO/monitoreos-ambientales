import { TestBed } from '@angular/core/testing';

import { GenerarPlanService } from './generar-plan.service';

describe('GenerarPlanService', () => {
  let service: GenerarPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerarPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
