import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrazioneDipendenteComponent } from './registrazione-dipendente.component';

describe('RegistrazioneDipendenteComponent', () => {
  let component: RegistrazioneDipendenteComponent;
  let fixture: ComponentFixture<RegistrazioneDipendenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrazioneDipendenteComponent],
    });
    fixture = TestBed.createComponent(RegistrazioneDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
