import { DipendenteTecnologia } from './../model/dipendenteTecnologia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dipendente } from '../model/dipendente';
import { DipendenteDTO } from '../model/dipendenteDTO';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private baseUrl="http://localhost:8202/rest/api";
  
  constructor(private httpClient: HttpClient) { }

  trovaTutteLeTecnologie():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/competenze/tecnologie`);
  }

  salvaTutteLeCompetenze(competenze:DipendenteTecnologia[]):Observable<any>{
   return this.httpClient.post(`${this.baseUrl}/competenze/associa-dipendente-tecnologie`,competenze)
  }

  registraDipendente(dipendente : Dipendente) : Observable<any> {
    
    return this.httpClient.post(`${this.baseUrl}/registrazione-dipendenti/nuovo-dipendente`, dipendente);

  }

  loginDipendente(dipendenteDTO:DipendenteDTO) : Observable<any> {
    return this.httpClient.post(`http://localhost:8202/rest/api/dipendenti/login-dipendente`,dipendenteDTO)
  }
}
