export class UtenteHrRegistrazione {
  nome: string;
  cognome: string;
  email: string;
  password: string;
  ruolo: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    password: string,
    ruolo: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.password = password;
    this.ruolo = ruolo;
  }
    
}
