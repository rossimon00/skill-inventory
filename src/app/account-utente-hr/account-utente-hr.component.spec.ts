import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUtenteHrComponent } from './account-utente-hr.component';

describe('AccountUtenteHrComponent', () => {
  let component: AccountUtenteHrComponent;
  let fixture: ComponentFixture<AccountUtenteHrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountUtenteHrComponent]
    });
    fixture = TestBed.createComponent(AccountUtenteHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
