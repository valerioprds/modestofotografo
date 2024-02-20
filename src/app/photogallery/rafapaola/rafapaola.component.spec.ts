import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafapaolaComponent } from './rafapaola.component';

describe('RafapaolaComponent', () => {
  let component: RafapaolaComponent;
  let fixture: ComponentFixture<RafapaolaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RafapaolaComponent]
    });
    fixture = TestBed.createComponent(RafapaolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
