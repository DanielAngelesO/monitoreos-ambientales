import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMonitoreosComponent } from './consulta-monitoreos.component';

describe('ConsultaMonitoreosComponent', () => {
  let component: ConsultaMonitoreosComponent;
  let fixture: ComponentFixture<ConsultaMonitoreosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaMonitoreosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMonitoreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
