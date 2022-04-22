import { TestBed } from '@angular/core/testing';

import { ConsultaMonitoreosService } from './consulta-monitoreos.service';

describe('ConsultaMonitoreosService', () => {
  let service: ConsultaMonitoreosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaMonitoreosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
