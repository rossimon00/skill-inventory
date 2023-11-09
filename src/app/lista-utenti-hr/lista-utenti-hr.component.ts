import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../model/ResponseData';
import { TecnologiaService } from '../service/tecnologia.service';
import { Router } from '@angular/router';
import { UtenteHr } from '../model/utenteHr';

@Component({
  selector: 'app-lista-utenti-hr',
  templateUrl: './lista-utenti-hr.component.html',
  styleUrls: ['./lista-utenti-hr.component.css'],
})
export class ListaUtentiHrComponent {

  onDelete(email: string) {
    
    this.router.navigate(["elimina-utente-hr", email])

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
}