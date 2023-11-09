import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimacionesComponent } from './estimaciones.component';

describe('EstimacionesComponent', () => {
  let component: EstimacionesComponent;
  let fixture: ComponentFixture<EstimacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstimacionesComponent]
    });
    fixture = TestBed.createComponent(EstimacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
