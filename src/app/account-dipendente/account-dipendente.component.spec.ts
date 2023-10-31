import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDipendenteComponent } from './account-dipendente.component';

describe('AccountDipendenteComponent', () => {
  let component: AccountDipendenteComponent;
  let fixture: ComponentFixture<AccountDipendenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountDipendenteComponent]
    });
    fixture = TestBed.createComponent(AccountDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
