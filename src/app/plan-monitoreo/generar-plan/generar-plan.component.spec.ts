import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarPlanComponent } from './generar-plan.component';

describe('GenerarPlanComponent', () => {
  let component: GenerarPlanComponent;
  let fixture: ComponentFixture<GenerarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
