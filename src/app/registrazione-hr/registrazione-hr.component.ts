import { Component } from '@angular/core';
import { UtenteHrRegistrazione } from '../model/UtenteHrRegistrazione';
import { TecnologiaService } from '../service/tecnologia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione-hr',
  templateUrl: './registrazione-hr.component.html',
  styleUrls: ['./registrazione-hr.component.css'],
})
export class RegistrazioneHrComponent {
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

  onSubmit(): void {
    console.log(this.utenteHr);

    this.registrazioneUtenteHr.registraUtenteHr(this.utenteHr).subscribe({
      next: (data) => {
        alert('Registrazione avvenuta correttamente');
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        alert('Registrazione fallita');
      },
    });
  }
}
