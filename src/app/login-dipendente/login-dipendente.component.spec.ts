import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDipendenteComponent } from './login-dipendente.component';

describe('LoginDipendenteComponent', () => {
  let component: LoginDipendenteComponent;
  let fixture: ComponentFixture<LoginDipendenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDipendenteComponent]
    });
    fixture = TestBed.createComponent(LoginDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
