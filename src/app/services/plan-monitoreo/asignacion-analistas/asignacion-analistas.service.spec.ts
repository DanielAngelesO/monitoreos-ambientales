import { TestBed } from '@angular/core/testing';

import { AsignacionAnalistasService } from './asignacion-analistas.service';

describe('AsignacionAnalistasService', () => {
  let service: AsignacionAnalistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionAnalistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
