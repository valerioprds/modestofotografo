import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandradiegoComponent } from './sandradiego.component';

describe('SandradiegoComponent', () => {
  let component: SandradiegoComponent;
  let fixture: ComponentFixture<SandradiegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SandradiegoComponent]
    });
    fixture = TestBed.createComponent(SandradiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
