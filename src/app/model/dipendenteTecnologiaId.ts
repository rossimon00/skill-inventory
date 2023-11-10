import { Dipendente } from './dipendente';
import { Tecnologia } from './tecnologia';

export class DipendenteTecnologiaId {
  dipendente: Dipendente;
  tecnologia: Tecnologia;

  constructor(dipendente: Dipendente, tecnologia: Tecnologia) {
    this.dipendente = dipendente;
    this.tecnologia = tecnologia;
  }
}
