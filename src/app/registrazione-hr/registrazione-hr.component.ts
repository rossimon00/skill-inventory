import { Component, OnInit } from '@angular/core';
import { UtenteHrRegistrazione } from '../model/UtenteHrRegistrazione';
import { TecnologiaService } from '../service/tecnologia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione-hr',
  templateUrl: './registrazione-hr.component.html',
  styleUrls: ['./registrazione-hr.component.css'],
})
export class RegistrazioneHrComponent implements OnInit {
  passwordErrorMessage: string = '';
  ruoloErrorMessage: string = '';
  isRegistrationValid: boolean = false;
  emailErrorMessage: string = '';

  utenteHr: UtenteHrRegistrazione = new UtenteHrRegistrazione(
    '',
    '',
    '',
    '',
    ''
  );

  constructor(
    private registrazioneUtenteHr: TecnologiaService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.registrazioneUtenteHr.getRuolo() !== 'admin') {
      this.router.navigate(['/welcome']);
    }
  }

  validateRegistration(): void {
    const allowedRoles = ['user', 'admin'];
    if (
      this.utenteHr.password.length >= 8 &&
      allowedRoles.includes(this.utenteHr.ruolo.toLowerCase())
    ) {
      this.isRegistrationValid = true;
    } else {
      this.isRegistrationValid = false;
    }
  }

  capitalizeFirstLetter(field: keyof UtenteHrRegistrazione): void {
    // Converte la prima lettera in maiuscolo
    this.utenteHr[field] =
      this.utenteHr[field].charAt(0).toUpperCase() +
      this.utenteHr[field].slice(1);
    this.validateRegistration();
  }

  validatePassword(): void {
    if (this.utenteHr.password.length < 8) {
      this.passwordErrorMessage =
        'La password deve contenere almeno 8 caratteri.';
    } else {
      this.passwordErrorMessage = '';
    }
    this.validateRegistration();
  }

  validateRole(): void {
    const allowedRoles = ['user', 'admin'];
    if (!allowedRoles.includes(this.utenteHr.ruolo.toLowerCase())) {
      this.ruoloErrorMessage = 'Il ruolo deve essere "user" o "admin".';
    } else {
      this.ruoloErrorMessage = '';
    }
    this.validateRegistration();
  }

  validateEmail(): void {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|it)$/;

    if (!emailPattern.test(this.utenteHr.email.toLowerCase())) {
      this.emailErrorMessage =
        'L\'email per essere valida, deve contenere il simbolo "@" e avere un suffisso di dominio valido (.com o .it)';
    } else {
      this.emailErrorMessage = '';
    }
    this.validateRegistration();
  }

  validateInput(field: keyof UtenteHrRegistrazione): void {
    switch (field) {
      case 'password':
        this.validatePassword();
        break;
      case 'ruolo':
        this.validateRole();
        break;
      case 'email':
        this.validateEmail();
        break;

      default:
        break;
    }
  }

  toLowerCase(field: keyof UtenteHrRegistrazione): void {
    // Converte l'intero valore in minuscolo
    this.utenteHr[field] = this.utenteHr[field].toLowerCase();
    this.validateRegistration();
  }

  onSubmit(): void {
    console.log(this.utenteHr);

    this.registrazioneUtenteHr.registraUtenteHr(this.utenteHr).subscribe({
      next: (data) => {
        alert('Registrazione avvenuta correttamente');
        this.router.navigate(['/lista-utenti-hr']);
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        alert('Registrazione non riuscita');
      },
    });
  }
}
