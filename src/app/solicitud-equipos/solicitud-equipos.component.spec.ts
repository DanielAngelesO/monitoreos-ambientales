import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudEquiposComponent } from './solicitud-equipos.component';

describe('SolicitudEquiposComponent', () => {
  let component: SolicitudEquiposComponent;
  let fixture: ComponentFixture<SolicitudEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
