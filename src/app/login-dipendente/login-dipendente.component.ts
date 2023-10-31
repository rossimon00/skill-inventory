import { Component, OnInit } from '@angular/core';
import { DipendenteDTO } from '../model/dipendenteDTO';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-login-dipendente',
  templateUrl: './login-dipendente.component.html',
  styleUrls: ['./login-dipendente.component.css']
})
export class LoginDipendenteComponent implements OnInit {
  dipendente:DipendenteDTO=new DipendenteDTO("","");
  constructor(private dipendenteService : TecnologiaService) { 
   
  }
 
  ngOnInit(): void {
  }
 
  onSubmit(): void {
    console.log(this.dipendente)
    this.dipendenteService.loginDipendente(this.dipendente).
    subscribe({
      next : (data) => {
        alert("Hai acceduto correttamente");
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        alert(error.error.message);
      }
    });   
  }
 }
 