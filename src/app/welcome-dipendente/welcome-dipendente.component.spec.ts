import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDipendenteComponent } from './welcome-dipendente.component';

describe('WelcomeDipendenteComponent', () => {
  let component: WelcomeDipendenteComponent;
  let fixture: ComponentFixture<WelcomeDipendenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeDipendenteComponent]
    });
    fixture = TestBed.createComponent(WelcomeDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
