import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Dipendente } from '../model/dipendente';

import { Router } from '@angular/router';
import { TecnologiaService } from '../service/tecnologia.service';
import { Inserimento } from '../model/input';

@Component({
  selector: 'app-registrazione-dipendente',
  templateUrl: './registrazione-dipendente.component.html',
  styleUrls: ['./registrazione-dipendente.component.css'],
})
export class RegistrazioneDipendenteComponent {
  dipendente: Dipendente = new Dipendente();
  message: string = '';
  showMessage: string = '';
  dimensione: string = '';
  giustizia: boolean = false;
  inserimento: Inserimento = new Inserimento('', false);
  inputs: Inserimento[] = [];
  campi: string[] = [
    'codiceFiscale',
    'nome',
    'cognome',
    'email',
    'password',
    'luogo',
    'indirizzo',
    'citta',
    'cap',
    'tel',
  ];
  minDate: Date;
  maxDate: Date;
  constructor(
    private dipendenteService: TecnologiaService,
    private router: Router
  ) {
    var data = new Date();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = data.getDate();

    this.minDate = new Date(currentYear - 70, currentMonth - 0, currentDay);
    this.maxDate = new Date(currentYear - 18, currentMonth - 0, currentDay);
  }

  onSubmit(): void {
    this.dipendenteService.registraDipendente(this.dipendente).subscribe({
      next: (data) => {
        alert('Registrazione avvenuta correttamente');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        alert('Registrazione non riuscita');
      },
    });
  }

  ngOnInit() {

    this.dipendenteService.setToken("")

    this.campi.forEach((id) => {
      this.inserimento = new Inserimento(id, false);
      this.inputs.push(this.inserimento);
    });

    this.inserimento = new Inserimento('', false);
  }

  controlloGiustizia() {
    var i = 0;
    this.inputs.forEach((input) => {
      if (input.corretto == false) {
        i++;
      }
    });
    if (i == 0) {
      this.giustizia = true;
    } else {
      this.giustizia = false;
    }
  }

  dimensioneInput(boxinput: HTMLInputElement): void {

    if (boxinput.id == 'codiceFiscale') {
      this.dimensione = ' di 16 caratteri ';
      if (boxinput.value.length == 16) {
        this.inserimento.corretto = true;
      } else {
        this.inserimento.corretto = false;
      }
    } else if (boxinput.id == 'tel') {
      this.dimensione = ' di almeno 8 caratteri e deve contenere solo numeri';
      if (
        /^\d+$/.test(this.dipendente.numeroTelefonico) &&
        boxinput.value.length >= 8
      ) {
        this.inserimento.corretto = true;
      } else {
        this.inserimento.corretto = false;
      }
    } else if (boxinput.id == 'password') {
      this.dimensione = ' di almeno 8 caratteri ';
      if (boxinput.value.length >= 8) {
        this.inserimento.corretto = true;
      } else {
        this.inserimento.corretto = false;
      }
    } else if (boxinput.id == 'cap') {
      this.dimensione = ' di 5 cifre e deve contenere solo numeri ';
      if (boxinput.value.length == 5 && /^\d+$/.test(this.dipendente.cap)) {
        this.inserimento.corretto = true;
      } else {
        this.inserimento.corretto = false;
      }
    } else if (
      boxinput.id == 'nome' ||
      boxinput.id == 'cognome' ||
      boxinput.id == 'luogo' ||
      boxinput.id == 'citta'
    ) {
      if (boxinput.value.length >= 1 && boxinput.value.length <= 50) {
        this.inserimento.corretto = true;
        this.message = '';
      } else {
        this.inserimento.corretto = false;
      }
    } else {
      if (boxinput.value.length >= 1 && boxinput.value.length <= 100) {
        this.inserimento.corretto = true;
      } else {
        this.inserimento.corretto = false;
      }
    }
    if (this.inserimento.corretto == false) {
      this.message = boxinput.name + 'deve essere ' + this.dimensione;
    }

    this.inputs.forEach((input) => {
      if (input.name == boxinput.id) {
        input.corretto = this.inserimento.corretto;
        this.showMessage = input.name;
      }
    });

    this.controlloGiustizia();
  }

  validateEmail(): void {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|it)$/;

    if (!emailPattern.test(this.dipendente.email.toLowerCase())) {
      this.showMessage = 'email';
      this.message =
        'L\'email deve essere valida, contenere il simbolo "@" e avere un suffisso di dominio valido (.com o .it)';
      this.inserimento.corretto = false;
    } else {
      this.showMessage = '';
      this.message = '';
      this.inserimento.corretto = true;
    }

    this.controlloGiustizia();
  }
}
