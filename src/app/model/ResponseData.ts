import { UtenteHr } from './utenteHr';

export class ResponseData {
  utentiHR: UtenteHr[];

  constructor(utentiHR: UtenteHr[]) {
    this.utentiHR = utentiHR;
  }
}
