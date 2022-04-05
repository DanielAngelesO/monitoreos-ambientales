import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionAnalistasComponent } from './asignacion-analistas.component';

describe('AsignacionAnalistasComponent', () => {
  let component: AsignacionAnalistasComponent;
  let fixture: ComponentFixture<AsignacionAnalistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionAnalistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionAnalistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
