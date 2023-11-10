import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHrComponent } from './welcome-hr.component';

describe('WelcomeHrComponent', () => {
  let component: WelcomeHrComponent;
  let fixture: ComponentFixture<WelcomeHrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeHrComponent],
    });
    fixture = TestBed.createComponent(WelcomeHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
