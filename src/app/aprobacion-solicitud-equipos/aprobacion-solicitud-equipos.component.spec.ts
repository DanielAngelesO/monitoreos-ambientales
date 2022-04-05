import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionSolicitudEquiposComponent } from './aprobacion-solicitud-equipos.component';

describe('AprobacionSolicitudEquiposComponent', () => {
  let component: AprobacionSolicitudEquiposComponent;
  let fixture: ComponentFixture<AprobacionSolicitudEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobacionSolicitudEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionSolicitudEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
