import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoCategoriaComponent } from './inserimento-categoria.component';

describe('InserimentoCategoriaComponent', () => {
  let component: InserimentoCategoriaComponent;
  let fixture: ComponentFixture<InserimentoCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserimentoCategoriaComponent]
    });
    fixture = TestBed.createComponent(InserimentoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
