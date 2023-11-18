import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProcesosComponent } from './info-procesos.component';

describe('InfoProcesosComponent', () => {
  let component: InfoProcesosComponent;
  let fixture: ComponentFixture<InfoProcesosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoProcesosComponent]
    });
    fixture = TestBed.createComponent(InfoProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
