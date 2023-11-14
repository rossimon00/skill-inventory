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
  utenteNome!: string | null;
  utenteRuolo!: string | null;

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

        const token = JSON.stringify(this.dipendenteService.getToken());
        const decoded = jwtDecode(token);

        this.dipendenteNome = JSON.stringify(decoded);

        let jsonObject = JSON.parse(this.dipendenteNome);
        
        this.dipendenteService.setNome(jsonObject.nome);
        this.dipendenteService.setRuolo(jsonObject.ruolo);
        
        this.utenteNome = this.dipendenteService.getNome();
        this.utenteRuolo = this.dipendenteService.getRuolo();

        this.dipendenteService.setScadenza(jsonObject.exp)
        
        this.router.navigate(['/welcome-hr']);
      },
      error: (error) => {
        alert('Credenziali errate o account non esistente');
      },
    });
  }
}
