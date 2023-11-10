import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrazioneHrComponent } from './registrazione-hr.component';

describe('RegistrazioneHrComponent', () => {
  let component: RegistrazioneHrComponent;
  let fixture: ComponentFixture<RegistrazioneHrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrazioneHrComponent]
    });
    fixture = TestBed.createComponent(RegistrazioneHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
