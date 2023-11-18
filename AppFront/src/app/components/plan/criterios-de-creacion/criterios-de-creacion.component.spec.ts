import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriosDeCreacionComponent } from './criterios-de-creacion.component';

describe('CriteriosDeCreacionComponent', () => {
  let component: CriteriosDeCreacionComponent;
  let fixture: ComponentFixture<CriteriosDeCreacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriteriosDeCreacionComponent]
    });
    fixture = TestBed.createComponent(CriteriosDeCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
