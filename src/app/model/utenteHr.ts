export class UtenteHr{

    
   nome: string;
   cognome: string;
   email: string;
   password: string;
   ruolo:string; 


   constructor(codiceFiscale:string, nome:string, cognome:string, 
    email:string, password:string,ruolo:string){
    this.email=email;
    this.cognome=cognome;
    this.nome=nome;
    this.password=password;      
    this.ruolo=ruolo;
}

}