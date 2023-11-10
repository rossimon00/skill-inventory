import { Component } from '@angular/core';
import { TecnologiaService } from '../service/tecnologia.service';
import { jwtDecode } from 'jwt-decode';

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

  constructor(private dipendenteService: TecnologiaService) {}

  ngOnInit() {
    const token = JSON.stringify(this.dipendenteService.getToken());
    const decoded = jwtDecode(token);
    this.dipendenteNome = JSON.stringify(decoded);
    let jsonObject = JSON.parse(this.dipendenteNome);
    this.dipendenteService.setNome(jsonObject.nome);
    this.dipendenteService.setRuolo(jsonObject.ruolo);
    console.log(this.dipendenteService.getRuolo());

    this.utenteNome = this.dipendenteService.getNome();
    this.utenteRuolo = this.dipendenteService.getRuolo();
    console.log(this.dipendenteService.getRuolo());

    let currentDate: Date = new Date();
    this.time = currentDate.getHours() % 24;
    console.log(this.time);
  }
}
