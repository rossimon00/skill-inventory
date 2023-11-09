import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUtentiHrComponent } from './lista-utenti-hr.component';

describe('ListaUtentiHrComponent', () => {
  let component: ListaUtentiHrComponent;
  let fixture: ComponentFixture<ListaUtentiHrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaUtentiHrComponent]
    });
    fixture = TestBed.createComponent(ListaUtentiHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
