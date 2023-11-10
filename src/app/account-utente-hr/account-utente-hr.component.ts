import { Component } from '@angular/core';
import { TecnologiaService } from '../service/tecnologia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtenteHr } from '../model/utenteHr';
import { UtenteHREmail } from '../model/UtenteHREmail';

@Component({
  selector: 'app-account-utente-hr',
  templateUrl: './account-utente-hr.component.html',
  styleUrls: ['./account-utente-hr.component.css'],
})
export class AccountUtenteHrComponent {
  controlloGiustizia() {
    if (
      this.utenteHr.nome.length >= 1 &&
      this.utenteHr.cognome.length >= 1 &&
      this.utenteHr.email.length >= 1
    ) {
      this.giustizia = true;
    } else {
      this.giustizia = false;
    }
  }

  messaggio: string = '';
  verita: boolean = true;
  confermaPassword: string = '';
  nuovaPassword: string = '';
  email!: string;

  utenteHr: UtenteHr = new UtenteHr('', '', '', '', '');

  giustizia: boolean = true;

  constructor(
    private utenteHrService: TecnologiaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.utenteHrService.getToken() === '') {
      this.router.navigate(['/welcome']);
    }

    this.email = this.route.snapshot.params['email'];
    console.log('email: ' + this.email);

    this.utenteHrService
      .trovaUtenteHr(new UtenteHREmail(this.email))
      .subscribe((value) => {
        console.log(value.utenteHR);

        (this.utenteHr.ruolo = value.utenteHR.ruolo),
          (this.utenteHr.nome = value.utenteHR.nome),
          (this.utenteHr.cognome = value.utenteHR.cognome),
          (this.utenteHr.email = value.utenteHR.email),
          (this.messaggio = value.utenteHR.password);
      });

    console.log('Utente ' + this.utenteHr.ruolo);
  }

  vero() {
    if (
      this.confermaPassword === this.nuovaPassword &&
      this.nuovaPassword.length >= 8
    ) {
      this.verita = true;
    } else {
      this.verita = false;
    }
    console.log(this.confermaPassword + ' a ' + this.nuovaPassword);
  }

  onSubmit(): void {
    if (this.utenteHr.password === '') {
      this.utenteHr.password = this.messaggio;
    }

    let jsonDipendente = JSON.stringify(this.utenteHr);

    jsonDipendente = jsonDipendente.replace(
      '}',
      ',"nuovaPassword":"' + this.nuovaPassword + '"}'
    );

    console.log('bbbbbbbbaaa ' + jsonDipendente);

    this.utenteHrService.modificaUtenteHR(jsonDipendente).subscribe({
      next: (data) => {
        alert('Modifica avvenuta con successo');
        console.log(data);
        this.utenteHrService.setNome(this.utenteHr.nome);
      },
      error: (error) => {
        console.log(error);
        alert('Modifica fallita');
      },
    });
  }
}
