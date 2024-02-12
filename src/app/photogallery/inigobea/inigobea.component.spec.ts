import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InigobeaComponent } from './inigobea.component';

describe('InigobeaComponent', () => {
  let component: InigobeaComponent;
  let fixture: ComponentFixture<InigobeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InigobeaComponent]
    });
    fixture = TestBed.createComponent(InigobeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
