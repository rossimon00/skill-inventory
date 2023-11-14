import { DipendenteTecnologia } from './../model/dipendenteTecnologia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dipendente } from '../model/dipendente';
import { DipendenteDTO } from '../model/dipendenteDTO';
import { UtenteHrTabella } from '../model/utenteHrTabella';
import { Tecnologia } from '../model/tecnologia';
import { Categoria } from '../model/categoria';
import { ResponseData } from '../model/ResponseData';
import { UtenteHr } from '../model/utenteHr';
import { UtenteHREmail } from '../model/UtenteHREmail';
import { UtenteHrRegistrazione } from '../model/UtenteHrRegistrazione';
import { RicercaDipendenteTecnologia } from '../model/ricercaDipendenteTecnologia';

@Injectable({
  providedIn: 'root',
})
export class TecnologiaService {
  private baseUrl = 'http://localhost:8771/rest/api';
  nome: string = '';
  ruolo: string = '';
  constructor(private httpClient: HttpClient) {}

  setRuolo(ruolo: string) {
    localStorage.setItem('ruolo', ruolo);
  }

  setScadenza(scadenza:string) {
    localStorage.setItem('scadenza', scadenza)
  }

  getScadenza(): Date {

    let scadenza :string = localStorage.getItem('scadenza')!;
    
    let scadenzaData: Date = new Date(Number(scadenza)*1000)
    let data: Date = new Date()
    
    return scadenzaData

  }

  isScaduto(): boolean {

    return this.getScadenza() < new Date()

  }

  getRuolo(): string | null {
    let ruolo = localStorage.getItem('ruolo');
    return ruolo;
  }

  setNome(nome: string) {
    localStorage.setItem('nome', nome);
  }

  getNome(): string | null {
    let nome = localStorage.getItem('nome');
    return nome;
  }

  setToken(token: string) {
    const tokenString: string = JSON.stringify(token);

    localStorage.setItem(
      'token',
      tokenString.replace('"', '').replace('"', '')
    );
  }

  trovaIlDipendente(): Observable<any> {
    return this.httpClient.post(
      `${this.baseUrl}/dipendenti/ottieni-dipendente`,
      null
    );
  }

  trovaTutteLeTecnologie(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/competenze/tecnologie`);
  }

  trovaTutteleCategorie(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/tecnologie/lettura-categorie`);
  }

  trovaTecnologie(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/tecnologie/tecnologie`);
  }

  nuovaTecnologia(tecnologia: Tecnologia): Observable<any> {
    return this.httpClient.post(
      `${this.baseUrl}/tecnologie/nuova-tecnologia`,
      tecnologia
    );
  }

  nuovaCategoria(categoria: Categoria): Observable<any> {
    return this.httpClient.post(
      `${this.baseUrl}/categorie/nuova-categoria`,
      categoria
    );
  }

  salvaTutteLeCompetenze(competenze: DipendenteTecnologia[]): Observable<any> {
    return this.httpClient.post(
      `${this.baseUrl}/competenze/associa-dipendente-tecnologie`,
      competenze
    );
  }

  registraDipendente(dipendente: Dipendente): Observable<any> {
    return this.httpClient.post(
      `${this.baseUrl}/registrazione-dipendenti/nuovo-dipendente`,
      dipendente
    );
  }

  modificaDipendente(dipendente: string): Observable<any> {
    console.log('ciaooooo' + dipendente);

    return this.httpClient.patch(
      `${this.baseUrl}/dipendenti/modifica-dipendente`,
      dipendente
    );
  }

  getToken(): string | null {
    let token = localStorage.getItem('token');

    return token;
  }

  loginDipendente(dipendenteDTO: DipendenteDTO): Observable<any> {
    return this.httpClient.post(
      `${this.baseUrl}/dipendenti/login-dipendente`,
      dipendenteDTO
    );
  }

  loginHr(utente: DipendenteDTO): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/hr/login-hr`, utente);
  }

  vediListaUtentiHrCustom(): Observable<ResponseData> {
    return this.httpClient.get<ResponseData>(
      `${this.baseUrl}/hr/utenti/custom`
    );
  }

  trovaUtenteHr(email: UtenteHREmail): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/hr/trovaHr`, email);
  }

  modificaUtenteHR(utenteHR: string): Observable<any> {
    return this.httpClient.put(
      `${this.baseUrl}/hr/modifica/aggiornamento-utente`,
      utenteHR
    );
  }

  registraUtenteHr(utenteHR: UtenteHrRegistrazione): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/registrazione-hr`, utenteHR);
  }

  ricercaDipendenti(nomiTecnologie : string[]) : Observable<any[]>{
    
    let dipendenti = this.httpClient.post<RicercaDipendenteTecnologia[]>(`${this.baseUrl}/dipendenti-per-tecnologie`, nomiTecnologie);
    
    return dipendenti;

  }
  
  listaTecnologie() : Observable<string[]>{
    
    
    return this.httpClient.get<string[]>(`${this.baseUrl}/hr/dipendenti-competenze/tecnologie`);

  }

  eliminaUtenteHr(email: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/hr/cancellazione/${email}`);
  }
}
