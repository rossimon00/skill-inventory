import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LoginDipendenteComponent } from './login-dipendente/login-dipendente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from "@auth0/angular-jwt"
import { WelcomeComponent } from './welcome/welcome.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListaDiTecnologieComponent } from './lista-di-tecnologie/lista-di-tecnologie.component';
import { MessageComponent } from './message/message.component';
import { RegistrazioneDipendenteComponent } from './registrazione-dipendente/registrazione-dipendente.component';
import { LoginHrComponent } from './login-hr/login-hr.component';
import { WelcomeHrComponent } from './welcome-hr/welcome-hr.component';
import { WelcomeDipendenteComponent } from './welcome-dipendente/welcome-dipendente.component';
import { AccountDipendenteComponent } from './account-dipendente/account-dipendente.component';
import { InserimentoCategoriaComponent } from './inserimento-categoria/inserimento-categoria.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InserisciTecnologiaComponent } from './inserisci-tecnologia/inserisci-tecnologia.component';
import { ListaUtentiHrComponent } from './lista-utenti-hr/lista-utenti-hr.component';
import { EliminaUtenteHrComponent } from './elimina-utente-hr/elimina-utente-hr.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginDipendenteComponent,
    WelcomeComponent,
    ListaDiTecnologieComponent,
    MessageComponent,
    RegistrazioneDipendenteComponent,
    LoginHrComponent,
    WelcomeHrComponent,
    WelcomeDipendenteComponent,
    AccountDipendenteComponent,
    InserimentoCategoriaComponent,
    InserisciTecnologiaComponent,
    ListaUtentiHrComponent,
    EliminaUtenteHrComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
 HttpClientModule,
     ReactiveFormsModule,
     MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,  
  ]
  ,
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi:true,
     },
     { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  

}
