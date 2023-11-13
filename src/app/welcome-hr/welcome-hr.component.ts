import { Component } from '@angular/core';
import { TecnologiaService } from '../service/tecnologia.service';
import { jwtDecode } from 'jwt-decode';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-hr',
  templateUrl: './welcome-hr.component.html',
  styleUrls: ['./welcome-hr.component.css'],
})
export class WelcomeHrComponent {
  time!: number;
  utenteNome!: string | null;
  utenteRuolo!: string | null;
  dipendenteNome!: string | null;

  constructor(private dipendenteService: TecnologiaService, private router: Router) {}

  ngOnInit() {

    if (this.dipendenteService.getToken() === '') {
      this.router.navigate(['/welcome']);
    }

    const token = JSON.stringify(this.dipendenteService.getToken());
    const decoded = jwtDecode(token);
    this.dipendenteNome = JSON.stringify(decoded);
    let jsonObject = JSON.parse(this.dipendenteNome);
    this.dipendenteService.setNome(jsonObject.nome);
    this.dipendenteService.setRuolo(jsonObject.ruolo);

    this.utenteNome = this.dipendenteService.getNome();
    this.utenteRuolo = this.dipendenteService.getRuolo();

    let currentDate: Date = new Date();
    this.time = currentDate.getHours() % 24;
  }
}
