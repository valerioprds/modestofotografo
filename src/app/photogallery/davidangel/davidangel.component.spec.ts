import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidangelComponent } from './davidangel.component';

describe('DavidangelComponent', () => {
  let component: DavidangelComponent;
  let fixture: ComponentFixture<DavidangelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DavidangelComponent]
    });
    fixture = TestBed.createComponent(DavidangelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
