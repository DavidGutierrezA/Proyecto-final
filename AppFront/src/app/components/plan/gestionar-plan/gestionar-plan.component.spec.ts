import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPlanComponent } from './gestionar-plan.component';

describe('GestionarPlanComponent', () => {
  let component: GestionarPlanComponent;
  let fixture: ComponentFixture<GestionarPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarPlanComponent]
    });
    fixture = TestBed.createComponent(GestionarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
