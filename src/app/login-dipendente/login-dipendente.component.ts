import { Component, OnInit } from '@angular/core';
import { DipendenteDTO } from '../model/dipendenteDTO';
import { TecnologiaService } from '../service/tecnologia.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login-dipendente',
  templateUrl: './login-dipendente.component.html',
  styleUrls: ['./login-dipendente.component.css']
})
export class LoginDipendenteComponent implements OnInit {
  dipendente:DipendenteDTO=new DipendenteDTO("","");
  dipendenteNome:string=''
  constructor(private dipendenteService : TecnologiaService,private router:Router) { 
  }
 
  ngOnInit(): void {
  }
 
  onSubmit(): void {
    console.log(this.dipendente)
    this.dipendenteService.loginDipendente(this.dipendente).
    subscribe({
      next : (data) => {
        alert("Hai acceduto correttamente");
        this.dipendenteService.setToken(data.token)
       this.router.navigate(['/welcome-dipendente'])
       const token = JSON.stringify(this.dipendenteService.getToken());
        const decoded = jwtDecode(token);
        if(decoded!==null){
          this.dipendenteService.setRuolo('dipendente')
        }
        this.dipendenteNome=JSON.stringify(decoded)
        let jsonObject=JSON.parse(this.dipendenteNome)
        this.dipendenteService.setNome(jsonObject.nome)
      },
      error: (error) => {
        console.log(error);
        alert(error.error.message);
      }
    });   
  }
 }
 