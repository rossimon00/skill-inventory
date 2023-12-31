import { Component } from '@angular/core';
import { TecnologiaService } from './service/tecnologia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'skill-inventory';
  constructor(private service: TecnologiaService, private router: Router) {}

  indirizzamento() {
    if (this.getToken() === '' || this.getToken() === null) {
      this.router.navigate(['/welcome']);
    } else if (
      (this.getToken() !== '' || this.getToken() !== null) &&
      this.getRuolo() === 'dipendente'
    ) {
      this.router.navigate(['/welcome-dipendente']);
    } else {
      this.router.navigate(['/welcome-hr']);
    }
  }

  getToken(): string | null {
    return this.service.getToken();
  }

  setToken() {
    this.service.setToken('');
    this.router.navigate(['/welcome']);
  }

  getRuolo(): string | null {
    return this.service.getRuolo();
  }
}
