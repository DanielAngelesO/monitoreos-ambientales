import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrdenesServicioComponent } from './table-ordenes-servicio.component';

describe('TableOrdenesServicioComponent', () => {
  let component: TableOrdenesServicioComponent;
  let fixture: ComponentFixture<TableOrdenesServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOrdenesServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOrdenesServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
