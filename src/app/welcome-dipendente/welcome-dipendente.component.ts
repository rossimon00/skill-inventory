import { Component } from '@angular/core';
import { TecnologiaService } from '../service/tecnologia.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-dipendente',
  templateUrl: './welcome-dipendente.component.html',
  styleUrls: ['./welcome-dipendente.component.css'],
})
export class WelcomeDipendenteComponent {
  time!: number;
  dipendenteNome: string | null = '';

  constructor(
    private dipendenteService: TecnologiaService,
    private router: Router
  ) {}

  ngOnInit() {


    if (this.dipendenteService.getRuolo() !== 'dipendente' ||
    this.dipendenteService.isScaduto()) {

      this.router.navigate(['/welcome']);
    }

    this.dipendenteNome = this.dipendenteService.getNome();
    let currentDate: Date = new Date();
    this.time = currentDate.getHours() % 24;
    
    console.log("pippo");
    

  }
}
