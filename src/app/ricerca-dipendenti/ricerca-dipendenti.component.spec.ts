import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaDipendentiComponent } from './ricerca-dipendenti.component';

describe('RicercaDipendentiComponent', () => {
  let component: RicercaDipendentiComponent;
  let fixture: ComponentFixture<RicercaDipendentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RicercaDipendentiComponent]
    });
    fixture = TestBed.createComponent(RicercaDipendentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
