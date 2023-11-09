import { Component } from '@angular/core';
import { UtenteHrTabella } from '../model/utenteHrTabella';
import { DipendenteDTO } from '../model/dipendenteDTO';
import { jwtDecode } from 'jwt-decode';
import { TecnologiaService } from '../service/tecnologia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-hr',
  templateUrl: './login-hr.component.html',
  styleUrls: ['./login-hr.component.css']
})
export class LoginHrComponent {
  utente:DipendenteDTO=new DipendenteDTO("","");
  dipendenteNome: string='';
 
  constructor(private dipendenteService : TecnologiaService,private router:Router) { 
  }
  ngOnInit(): void {
    
  }
 
  onSubmit(): void {
    console.log(this.utente)
    this.dipendenteService.loginHr(this.utente).
    subscribe({
      next : (data) => {
        alert("Hai acceduto correttamente");
        this.dipendenteService.setToken(data.token)
       this.router.navigate(['/welcome-hr'])
       
      },
      error: (error) => {
        console.log(error);
        alert(error.error.message);
      }
    });   
  }
}
