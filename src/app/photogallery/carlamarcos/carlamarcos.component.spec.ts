import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlamarcosComponent } from './carlamarcos.component';

describe('CarlamarcosComponent', () => {
  let component: CarlamarcosComponent;
  let fixture: ComponentFixture<CarlamarcosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarlamarcosComponent]
    });
    fixture = TestBed.createComponent(CarlamarcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
