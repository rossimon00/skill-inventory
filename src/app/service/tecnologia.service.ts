import { DipendenteTecnologia } from './../model/dipendenteTecnologia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dipendente } from '../model/dipendente';
import { DipendenteDTO } from '../model/dipendenteDTO';
import { UtenteHr } from '../model/utenteHr';
import { Tecnologia } from '../model/tecnologia';
import { Categoria } from '../model/categoria';
import { ResponseData } from '../model/ResponseData';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private baseUrl="http://localhost:8771/rest/api";
  nome:string=''
  ruolo:string=''  
  constructor(private httpClient: HttpClient) { }

  setRuolo(ruolo:string){
    localStorage.setItem('ruolo',ruolo)
  }

  getRuolo():string | null{
    let ruolo=localStorage.getItem('ruolo');
    return ruolo;
  }

  setNome(nome:string){
    localStorage.setItem('nome',nome)
  }

  getNome():string | null{
    let nome=localStorage.getItem('nome');
    return nome;
  }

  setToken(token:string){

    const tokenString:string = JSON.stringify( token );
    
    localStorage.setItem('token',  tokenString.replace('\"','').replace('\"',''));
 }

  trovaIlDipendente():Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/dipendenti/ottieni-dipendente`,null)
  }

  trovaTutteLeTecnologie():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/competenze/tecnologie`);
  }

  trovaTutteleCategorie():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tecnologie/lettura-categorie`);
  }

  trovaTecnologie():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/tecnologie/tecnologie`);
  }

  nuovaTecnologia(tecnologia:Tecnologia):Observable<any>{
    return this.httpClient.post(`http://10.5.60.123:8771/rest/api/tecnologie/nuova-tecnologia`,tecnologia);
  }

  nuovaCategoria(categoria:Categoria):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/categorie/nuova-categoria`,categoria);
  }

  salvaTutteLeCompetenze(competenze:DipendenteTecnologia[]):Observable<any>{
   return this.httpClient.post(`${this.baseUrl}/competenze/associa-dipendente-tecnologie`,competenze)
  }

  registraDipendente(dipendente : Dipendente) : Observable<any> {
    
    return this.httpClient.post(`${this.baseUrl}/registrazione-dipendenti/nuovo-dipendente`, dipendente);

  }

  modificaDipendente(dipendente : string) : Observable<any> {
    console.log('ciaooooo'  + dipendente);
    
    return this.httpClient.patch(`${this.baseUrl}/dipendenti/modifica-dipendente`, dipendente);

  }

  getToken(): string | null{
 
    let token = localStorage.getItem( 'token' );
    console.log(token);
    
  
   return token;
  
 }

  loginDipendente(dipendenteDTO:DipendenteDTO) : Observable<any> {

    return this.httpClient.post(`${this.baseUrl}/dipendenti/login-dipendente`,dipendenteDTO)
  }

  loginHr(utente:DipendenteDTO): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/hr/login-hr`, utente);
  }

  vediListaUtentiHrCustom(): Observable<ResponseData> {
    console.log("Token: "+this.getToken());
    
    
    return this.httpClient.get<ResponseData>(`${this.baseUrl}/hr/utenti/custom`);
  }

}
