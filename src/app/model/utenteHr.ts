export class UtenteHr {

    ruolo: string
    nome: string
    cognome: string
    email: string
    password: string

    constructor(ruolo: string,
                nome: string,
                cognome: string,
                email: string,
                password: string) {

        this.ruolo = ruolo
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password

    }

}