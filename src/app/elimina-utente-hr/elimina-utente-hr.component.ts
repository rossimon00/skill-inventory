import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TecnologiaService } from '../service/tecnologia.service';
import { UtenteHrTabella } from '../model/utenteHrTabella';

@Component({
  selector: 'app-elimina-utente-hr',
  templateUrl: './elimina-utente-hr.component.html',
  styleUrls: ['./elimina-utente-hr.component.css']
})
export class EliminaUtenteHrComponent {

  utenteHr !: UtenteHrTabella;

  constructor(private cancellazioneService:TecnologiaService, 
    private router: Router,
    private route: ActivatedRoute) {}


  ngOnInit() {
    this.utenteHr = this.route.snapshot.params['email']
    console.log(this.utenteHr);
    
  }

}
