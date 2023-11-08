import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Dipendente } from '../model/dipendente';

import { Router } from '@angular/router';
import { TecnologiaService } from '../service/tecnologia.service';
import { Inserimento } from '../model/input';


@Component({
  selector: 'app-registrazione-dipendente',
  templateUrl: './registrazione-dipendente.component.html',
  styleUrls: ['./registrazione-dipendente.component.css'],
})
export class RegistrazioneDipendenteComponent {
  dipendente : Dipendente = new Dipendente();
  message:string="";
  showMessage:string="";
  dimensione:string="";
  giustizia:boolean=false; 
  inserimento:Inserimento=new Inserimento("",false)
  inputs:Inserimento[]=[] 
  campi:string[]=["codiceFiscale","nome","cognome","email","password","luogo","indirizzo","citta","cap","tel"]
  minDate: Date;
  maxDate: Date;
  constructor(private dipendenteService : TecnologiaService, private router : Router) {
    var data= new Date();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    console.log(data);
    const currentDay = data.getDate();
    console.log(currentDay);
    
    this.minDate = new Date(currentYear - 70,currentMonth - 0,currentDay );
    this.maxDate = new Date(currentYear -18,currentMonth - 0,currentDay );
  }

  onSubmit() : void {
    
    console.log(this.dipendente);
    

    this.dipendenteService.registraDipendente(this.dipendente).
    subscribe({
      next : (data) => {
        alert("registrazione avvenuta correttamente");
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        alert(error.error.message);
      }
    });

    }

    ngOnInit(){
      
      this.campi.forEach(
        id=>{
        this.inserimento=new Inserimento(id,false)
        this.inputs.push(this.inserimento)
        }
      )

        this.inserimento=new Inserimento("",false)

    }


    controlloGiustizia(){
      var i=0;
    this.inputs.forEach(
    input=>{
      if(input.corretto==false){
        i++;
      }
    }
    )
    if(i==0){
      this.giustizia=true
    }
    else{
      this.giustizia=false
    }
  
    }
    
    dimensioneInput(boxinput: HTMLInputElement): void {
      console.log(boxinput.id);
      console.log("valore i"+this.inserimento.corretto);
      
      if(boxinput.id=="codiceFiscale"){
       
        this.dimensione=" di 16 caratteri "
        if(boxinput.value.length==16){  
          
          this.inserimento.corretto=true
        }
        else{
          this.inserimento.corretto=false;
        }
      }
      else if( boxinput.id=="tel"){
        
        this.dimensione=" di almeno 8 caratteri e deve contenere solo numeri"        
         if(/^\d+$/.test(this.dipendente.numeroTelefonico) && boxinput.value.length>=8 ){
           this.inserimento.corretto=true
         }
         else{
           this.inserimento.corretto=false;
         }
       }
      else if(boxinput.id=="password"){
        
       this.dimensione=" di almeno 8 caratteri "
        if(boxinput.value.length>=8 ){
          this.inserimento.corretto=true
        }
        else{
          this.inserimento.corretto=false;
        }
      }
      else if(boxinput.id=="cap"){
        
        this.dimensione=" di 5 cifre e deve contenere solo numeri "
        if(boxinput.value.length==5 && /^\d+$/.test(this.dipendente.cap)  ){
          this.inserimento.corretto=true
        }
        else{
          this.inserimento.corretto=false;
        }
      }
      else if(boxinput.id=="nome" || boxinput.id=="cognome" || boxinput.id=="luogo" || boxinput.id=="citta"){
        
        if(boxinput.value.length>=1 && boxinput.value.length<=50){
          this.inserimento.corretto=true;
          this.message=""
        }
        else{
          this.inserimento.corretto=false;
        }
      }
      else{
        
        if(boxinput.value.length>=1 && boxinput.value.length<=100){  
          this.inserimento.corretto=true
        }
        else{
          this.inserimento.corretto=false;
        }
      }
      if(this.inserimento.corretto==false){
        this.message = boxinput.name + "deve essere " + this.dimensione;
      }
      console.log(boxinput.value.length);
      
      this.inputs.forEach(input=>{
       
        if(input.name==boxinput.id){
          input.corretto=this.inserimento.corretto;
          this.showMessage=input.name
        }
        console.log(this.inputs[9].name)
      }
      )  
    
      this.controlloGiustizia();
      
      
   


    }
    
  
}
