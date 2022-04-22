import { TestBed } from '@angular/core/testing';

import { DevolucionEquiposService } from './devolucion-equipos.service';

describe('DevolucionEquiposService', () => {
  let service: DevolucionEquiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevolucionEquiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
