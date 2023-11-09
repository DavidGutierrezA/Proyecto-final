import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaPlanComponent } from './crea-plan.component';

describe('CreaPlanComponent', () => {
  let component: CreaPlanComponent;
  let fixture: ComponentFixture<CreaPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaPlanComponent]
    });
    fixture = TestBed.createComponent(CreaPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
