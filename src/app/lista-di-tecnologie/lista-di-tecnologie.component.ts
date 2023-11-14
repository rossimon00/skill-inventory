import { Router } from '@angular/router';
import { DipendenteTecnologiaId } from './../model/dipendenteTecnologiaId';
import { Categoria } from './../model/categoria';
import { Tecnologia } from './../model/tecnologia';
import { DipendenteTecnologia } from './../model/dipendenteTecnologia';
import { TecnologiaService } from '../service/tecnologia.service';
import { Observable } from 'rxjs';

import { Component, OnInit, numberAttribute } from '@angular/core';
import { Dipendente } from '../model/dipendente';

@Component({
  selector: 'app-lista-di-tecnologie',
  templateUrl: './lista-di-tecnologie.component.html',
  styleUrls: ['./lista-di-tecnologie.component.css'],
})
export class ListaDiTecnologieComponent implements OnInit {
  currentmessage!: Observable<any>;
  message1 = '';
  competenza: string[] = [];
  lunghezza = 0;
  esperienza: string[] = [];
  tecnologie!: Observable<Tecnologia[]>;
  date = new Date('2000-07-26');
  dipendentiTecnologie: DipendenteTecnologia[] = [];
  categoria = new Categoria('');
  dipendente: Dipendente = new Dipendente();
  tecnologies: Tecnologia[] = [];
  dipendenteTecnologiaId!: DipendenteTecnologiaId;
  dipendenteTecnologia!: DipendenteTecnologia;
  dipendent!: Observable<Dipendente>;

  constructor(
    private router: Router,
    private tecnologiaService: TecnologiaService
  ) {}

  showAllTechnologies(): void {
    this.tecnologie = this.tecnologiaService.trovaTutteLeTecnologie();
  }

  onSubmit(): void {
    for (var i = 0; i < this.tecnologies.length; i++) {
      this.dipendenteTecnologiaId = new DipendenteTecnologiaId(
        this.dipendente,
        this.tecnologies[i]
      );
      this.dipendenteTecnologia = new DipendenteTecnologia(
        this.dipendenteTecnologiaId,
        this.esperienza[i],
        this.competenza[i]
      );
      this.dipendentiTecnologie.push(this.dipendenteTecnologia);
    }

    this.currentmessage = this.tecnologiaService.salvaTutteLeCompetenze(
      this.dipendentiTecnologie
    );
    this.currentmessage.forEach((v) => {
      this.message1 = v.message;
    });
  }

  ngOnInit(): void {

    if (
      this.tecnologiaService.getRuolo() !== 'dipendente' ||
      this.tecnologiaService.isScaduto()
    ) {
      this.router.navigate(['/welcome']);
    }
    this.dipendent = this.tecnologiaService.trovaIlDipendente();
    this.dipendent.subscribe((value) => {
      this.dipendente.codiceFiscale = value.codiceFiscale;
      this.dipendente.cap = value.cap;
      (this.dipendente.cittaNatale = value.cittaNatale),
        (this.dipendente.cittaResidenza = value.cittaResidenza),
        (this.dipendente.cognome = value.cognome),
        (this.dipendente.nome = value.nome),
        (this.dipendente.email = value.email),
        (this.dipendente.indirizzo = value.indirizzo),
        (this.dipendente.numeroTelefonico = value.numeroTelefonico),
        (this.dipendente.password = value.password),
        (this.dipendente.dataDiNascita = value.dataDiNascita);
    });
    this.showAllTechnologies();
    this.tecnologie.forEach((t: Tecnologia[]) => {
      t.forEach((value) => {
        this.tecnologies.push(value);
        this.competenza.push('');
        this.esperienza.push('Meno di un anno');
      });
    });
  }
}
