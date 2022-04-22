import { TestBed } from '@angular/core/testing';

import { AprobacionSolicitudEquiposService } from './aprobacion-solicitud-equipos.service';

describe('AprobacionSolicitudEquiposService', () => {
  let service: AprobacionSolicitudEquiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprobacionSolicitudEquiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
