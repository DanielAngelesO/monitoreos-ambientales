import { TestBed } from '@angular/core/testing';

import { GenerarPlanEstimacionesService } from './generar-plan-estimaciones.service';

describe('GenerarPlanEstimacionesService', () => {
  let service: GenerarPlanEstimacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerarPlanEstimacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
