import { Component } from '@angular/core';
import { TecnologiaService } from '../service/tecnologia.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {

  dipendenteNome !: String

  constructor(private service: TecnologiaService, private router: Router) {}

  ngOnInit() {

    
    if (this.service.getToken() !== "") {

      const token = JSON.stringify(this.service.getToken());
      const decoded = jwtDecode(token);
      this.dipendenteNome = JSON.stringify(decoded);
      
      if (this.dipendenteNome.includes("admin") || this.dipendenteNome.includes("user"))
        this.router.navigate(['/welcome-hr']);
  
      else
        this.router.navigate(['/welcome-dipendente']);
      
    }
    
  }

}
