import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../model/ResponseData';
import { TecnologiaService } from '../service/tecnologia.service';
import { Router } from '@angular/router';
import { UtenteHrTabella } from '../model/utenteHrTabella';

@Component({
  selector: 'app-lista-utenti-hr',
  templateUrl: './lista-utenti-hr.component.html',
  styleUrls: ['./lista-utenti-hr.component.css'],
})
export class ListaUtentiHrComponent {
  onUpdate(email: string) {
    this.router.navigate(['modifica-utente-hr', email]);
  }

  onDelete(email: string): void {
    const conferma = window.confirm(
      'Sei sicuro di voler eliminare questo utente HR?'
    );

    if (conferma) {
      this.listaUtentiHrService.eliminaUtenteHr(email).subscribe({
        next: (data) => {
          alert('Cancellazione avvenuta con successo');
          this.caricaListaUtentiHr();
          console.log(data);
        },
        error: (error) => {
          console.log(error);
          alert('Cancellazione fallita');
        },
      });
    } else {
      alert('Cancellazione annullata');
    }
  }

  registraUtenteHt() {
    this.router.navigate(['registrazione-hr']);
  }

  utentiHr!: Observable<ResponseData>;

  constructor(
    private listaUtentiHrService: TecnologiaService,
    private router: Router
  ) {}

  vediListaUtentiHr(): void {
    this.utentiHr = this.listaUtentiHrService.vediListaUtentiHrCustom();
  }

  ngOnInit(): void {
    if (this.listaUtentiHrService.getToken() === '') {
      this.router.navigate(['/welcome']);
    }
    this.vediListaUtentiHr();
  }

  caricaListaUtentiHr(): void {
    this.utentiHr = this.listaUtentiHrService.vediListaUtentiHrCustom();
  }
}
