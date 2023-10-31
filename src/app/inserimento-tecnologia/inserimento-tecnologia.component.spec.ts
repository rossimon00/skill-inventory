import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoTecnologiaComponent } from './inserimento-tecnologia.component';

describe('InserimentoTecnologiaComponent', () => {
  let component: InserimentoTecnologiaComponent;
  let fixture: ComponentFixture<InserimentoTecnologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserimentoTecnologiaComponent]
    });
    fixture = TestBed.createComponent(InserimentoTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
