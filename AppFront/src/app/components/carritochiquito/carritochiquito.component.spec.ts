import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritochiquitoComponent } from './carritochiquito.component';

describe('CarritochiquitoComponent', () => {
  let component: CarritochiquitoComponent;
  let fixture: ComponentFixture<CarritochiquitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritochiquitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarritochiquitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
