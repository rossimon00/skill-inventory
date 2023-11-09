import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaUtenteHrComponent } from './elimina-utente-hr.component';

describe('EliminaUtenteHrComponent', () => {
  let component: EliminaUtenteHrComponent;
  let fixture: ComponentFixture<EliminaUtenteHrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminaUtenteHrComponent]
    });
    fixture = TestBed.createComponent(EliminaUtenteHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
