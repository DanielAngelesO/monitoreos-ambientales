import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionEquiposComponent } from './devolucion-equipos.component';

describe('DevolucionEquiposComponent', () => {
  let component: DevolucionEquiposComponent;
  let fixture: ComponentFixture<DevolucionEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucionEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
