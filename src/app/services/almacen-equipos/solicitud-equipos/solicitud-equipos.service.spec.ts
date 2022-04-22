import { TestBed } from '@angular/core/testing';

import { SolicitudEquiposService } from './solicitud-equipos.service';

describe('SolicitudEquiposService', () => {
  let service: SolicitudEquiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudEquiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
