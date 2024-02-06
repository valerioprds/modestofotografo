import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wedding1Component } from './wedding1.component';

describe('Wedding1Component', () => {
  let component: Wedding1Component;
  let fixture: ComponentFixture<Wedding1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Wedding1Component]
    });
    fixture = TestBed.createComponent(Wedding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
