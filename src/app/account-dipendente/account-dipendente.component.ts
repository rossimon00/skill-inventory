import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dipendente } from '../model/dipendente';
import { TecnologiaService } from '../service/tecnologia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-dipendente',
  templateUrl: './account-dipendente.component.html',
  styleUrls: ['./account-dipendente.component.css'],
})
export class AccountDipendenteComponent {
  messaggio: string = '';
  verita: boolean = true;
  confermaPassword: string = '';
  nuovaPassword: string = '';
  dipendente: Dipendente = new Dipendente();
  dipendent!: Observable<Dipendente>;
  showMessage: string = '';
  dimensione: string = '';
  giustizia: boolean = true;
  minDate: Date;
  maxDate: Date;

  constructor(
    private dipendenteService: TecnologiaService,
    private router: Router
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 80, 0, 1);
    this.maxDate = new Date(currentYear - 18, 11, 31);
  }

  vero() {
    if (this.confermaPassword === this.nuovaPassword) {
      this.verita = true;
    } else {
      this.verita = false;
    }
  }

  onSubmit(): void {
    if (this.dipendente.password === '') {
      this.dipendente.password = this.messaggio;
    }

    let jsonDipendente = JSON.stringify(this.dipendente);

    jsonDipendente = jsonDipendente.replace(
      '}',
      ',"nuovaPassword":"' + this.nuovaPassword + '"}'
    );

    this.dipendenteService.modificaDipendente(jsonDipendente).subscribe({
      next: (data) => {
        alert('Modifica avvenuta con successo');
        this.dipendenteService.setNome(this.dipendente.nome);
      },
      error: (error) => {
        alert('Modifica fallita');
      },
    });
  }

  ngOnInit() {
    if (this.dipendenteService.getToken() === '') {
      this.router.navigate(['/welcome']);
    }
    this.vero();

    this.dipendent = this.dipendenteService.trovaIlDipendente();
    this.dipendent.subscribe((value) => {
      this.dipendente.codiceFiscale = value.codiceFiscale;
      this.dipendente.cap = value.cap;
      (this.dipendente.cittaNatale = value.cittaNatale),
        (this.dipendente.cittaResidenza = value.cittaResidenza),
        (this.dipendente.cognome = value.cognome),
        (this.dipendente.nome = value.nome),
        (this.dipendente.email = value.email),
        (this.dipendente.indirizzo = value.indirizzo),
        (this.dipendente.numeroTelefonico = value.numeroTelefonico),
        (this.messaggio = value.password),
        (this.dipendente.dataDiNascita = value.dataDiNascita);
    });

  }

  controlloGiustizia() {
    if (
      this.dipendente.codiceFiscale.length == 16 &&
      /^\d+$/.test(this.dipendente.numeroTelefonico) &&
      this.dipendente.numeroTelefonico.length >= 8 &&
      this.dipendente.cap.length == 5 &&
      /^\d+$/.test(this.dipendente.cap) &&
      this.dipendente.nome.length >= 1 &&
      this.dipendente.cognome.length >= 1 &&
      this.dipendente.cittaNatale.length >= 1 &&
      this.dipendente.cittaResidenza.length >= 1 &&
      this.dipendente.email.length >= 1 &&
      this.dipendente.indirizzo.length >= 1
    ) {
      this.giustizia = true;
    } else {
      this.giustizia = false;
    }
  }
}
