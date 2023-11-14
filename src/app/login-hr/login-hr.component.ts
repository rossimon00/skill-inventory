import { Component } from '@angular/core';
import { UtenteHrTabella } from '../model/utenteHrTabella';
import { DipendenteDTO } from '../model/dipendenteDTO';
import { jwtDecode } from 'jwt-decode';
import { TecnologiaService } from '../service/tecnologia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-hr',
  templateUrl: './login-hr.component.html',
  styleUrls: ['./login-hr.component.css'],
})
export class LoginHrComponent {
  utente: DipendenteDTO = new DipendenteDTO('', '');
  dipendenteNome: string = '';

  constructor(
    private dipendenteService: TecnologiaService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.dipendenteService.setToken("")
  }

  onSubmit(): void {
    this.dipendenteService.loginHr(this.utente).subscribe({
      next: (data) => {
        this.dipendenteService.setToken(data.token);
        this.router.navigate(['/welcome-hr']);
      },
      error: (error) => {
        alert('Credenziali errate o account non esistente');
      },
    });
  }
}
