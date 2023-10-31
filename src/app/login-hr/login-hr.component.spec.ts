import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHrComponent } from './login-hr.component';

describe('LoginHrComponent', () => {
  let component: LoginHrComponent;
  let fixture: ComponentFixture<LoginHrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginHrComponent]
    });
    fixture = TestBed.createComponent(LoginHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
