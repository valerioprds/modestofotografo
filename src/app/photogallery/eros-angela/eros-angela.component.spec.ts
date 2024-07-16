import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErosAngelaComponent } from './eros-angela.component';

describe('ErosAngelaComponent', () => {
  let component: ErosAngelaComponent;
  let fixture: ComponentFixture<ErosAngelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErosAngelaComponent]
    });
    fixture = TestBed.createComponent(ErosAngelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
