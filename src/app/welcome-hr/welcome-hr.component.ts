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

  constructor(
    private dipendenteService: TecnologiaService,
    private router: Router
  ) {}

  ngOnInit() {

    this.utenteRuolo = this.dipendenteService.getRuolo()

    console.log(this.dipendenteService.getRuolo());
    console.log(this.dipendenteService.isScaduto());
    console.log(this.dipendenteService.getScadenza());
    

    if (
      this.dipendenteService.getRuolo() === 'dipendente' ||
      this.dipendenteService.getRuolo() === '' ||
      this.dipendenteService.isScaduto()
    ) {
      
      this.router.navigate(['/welcome']);
    }

    this.utenteNome = this.dipendenteService.getNome()
  
    let currentDate: Date = new Date();
    this.time = currentDate.getHours() % 24;
  }
}
