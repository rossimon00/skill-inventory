import { UtenteHrTabella } from './utenteHrTabella';

export class ResponseData {
  utentiHR: UtenteHrTabella[];

  constructor(utentiHR: UtenteHrTabella[]) {
    this.utentiHR = utentiHR;
  }
}
