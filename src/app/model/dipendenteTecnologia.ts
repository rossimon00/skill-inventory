
import { DipendenteTecnologiaId } from './dipendenteTecnologiaId';
export class DipendenteTecnologia {
 dipendenteTecnologiaId: DipendenteTecnologiaId;
 esperienza: string;
 competenza: string;

  constructor(dipendenteTecnologiaId: DipendenteTecnologiaId,esperienza: string,competenza: string) {
    this.dipendenteTecnologiaId = dipendenteTecnologiaId;
    this.esperienza = esperienza;
    this.competenza = competenza;
  }
}

