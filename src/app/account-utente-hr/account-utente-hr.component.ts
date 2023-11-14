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
    if (this.utenteHrService.getRuolo() !== 'admin' ||
    this.utenteHrService.isScaduto()) {
      this.router.navigate(['/welcome']);
    }

    this.email = this.route.snapshot.params['email'];

    this.utenteHrService
      .trovaUtenteHr(new UtenteHREmail(this.email))
      .subscribe((value) => {

        (this.utenteHr.ruolo = value.utenteHR.ruolo),
          (this.utenteHr.nome = value.utenteHR.nome),
          (this.utenteHr.cognome = value.utenteHR.cognome),
          (this.utenteHr.email = value.utenteHR.email),
          (this.messaggio = value.utenteHR.password);
      });
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

  }

  onSubmit(): void {
    if (this.utenteHr.password === '') {
      this.utenteHr.password = this.messaggio;
    }

    if (this.confermaPassword !== this.nuovaPassword 
      || (this.confermaPassword === '' || this.nuovaPassword === '')) {
      alert('Nuova password e conferma nuova password devono essere uguali e non vuote');
      return;
    }

    let jsonDipendente = JSON.stringify(this.utenteHr);

    jsonDipendente = jsonDipendente.replace(
      '}',
      ',"nuovaPassword":"' + this.nuovaPassword + '"}'
    );

    this.utenteHrService.modificaUtenteHR(jsonDipendente).subscribe({
      next: (data) => {
        alert('Modifica avvenuta con successo');
        this.utenteHrService.setNome(this.utenteHr.nome);
      },
      error: (error) => {
        alert('Modifica fallita');
      },
    });
  }
}
