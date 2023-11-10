import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciTecnologiaComponent } from './inserisci-tecnologia.component';

describe('InserisciTecnologiaComponent', () => {
  let component: InserisciTecnologiaComponent;
  let fixture: ComponentFixture<InserisciTecnologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserisciTecnologiaComponent],
    });
    fixture = TestBed.createComponent(InserisciTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
