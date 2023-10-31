import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDiTecnologieComponent } from './lista-di-tecnologie.component';

describe('ListaDiTecnologieComponent', () => {
  let component: ListaDiTecnologieComponent;
  let fixture: ComponentFixture<ListaDiTecnologieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDiTecnologieComponent]
    });
    fixture = TestBed.createComponent(ListaDiTecnologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
