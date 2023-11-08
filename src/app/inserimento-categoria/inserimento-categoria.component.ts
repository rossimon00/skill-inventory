import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';
import { Tecnologia } from '../model/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-inserimento-categoria',
  templateUrl: './inserimento-categoria.component.html',
  styleUrls: ['./inserimento-categoria.component.css']
})
export class InserimentoCategoriaComponent {

  categories!:Observable<Categoria[]>
  categoria: Categoria= new Categoria("");

  constructor(private tecnologiaService:TecnologiaService,private router:Router){

  }

  ngOnInit(){
    if(this.tecnologiaService.getToken()===''){
      this.router.navigate(['/welcome'])
    }
    this.categories=this.tecnologiaService.trovaTutteleCategorie();
  
  }

onSubmit() {
  
this.tecnologiaService.nuovaCategoria(this.categoria).subscribe(
  (res) =>{console.log(res) 
  window.location.reload()
  },
  err=>{console.error(err)}
 )}

}
