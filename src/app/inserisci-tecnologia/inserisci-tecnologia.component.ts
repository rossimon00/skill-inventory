import { Component } from '@angular/core';
import { Categoria } from '../model/categoria';
import { TecnologiaService } from '../service/tecnologia.service';
import { Observable } from 'rxjs';
import { Tecnologia } from '../model/tecnologia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserisci-tecnologia',
  templateUrl: './inserisci-tecnologia.component.html',
  styleUrls: ['./inserisci-tecnologia.component.css']
})
export class InserisciTecnologiaComponent {

  categories!:Observable<Categoria[]>

  categoria: Categoria= new Categoria("");
  tecnologia: Tecnologia=new Tecnologia("",this.categoria);
  tecnologie!:Observable<Tecnologia[]>
  constructor(private tecnologiaService:TecnologiaService,private router:Router){

  }

  ngOnInit(){
    if(this.tecnologiaService.getToken()===''){
      this.router.navigate(['/welcome'])
    }
    this.tecnologie=this.tecnologiaService.trovaTecnologie();
   
    this.categories=this.tecnologiaService.trovaTutteleCategorie();
   
  }

onSubmit() {
  console.log('ciao'+this.tecnologia.categoria.nome);
  
this.tecnologiaService.nuovaTecnologia(this.tecnologia).subscribe(
  (res) =>{console.log(res) 
  window.location.reload()
  },
  err=>{console.error(err)}
 )}

}


