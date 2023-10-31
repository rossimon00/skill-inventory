import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LoginDipendenteComponent } from './login-dipendente/login-dipendente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaDiTecnologieComponent } from './lista-di-tecnologie/lista-di-tecnologie.component';
import { MessageComponent } from './message/message.component';
import { RegistrazioneDipendenteComponent } from './registrazione-dipendente/registrazione-dipendente.component';
import { LoginHrComponent } from './login-hr/login-hr.component';
import { WelcomeHrComponent } from './welcome-hr/welcome-hr.component';
import { WelcomeDipendenteComponent } from './welcome-dipendente/welcome-dipendente.component';
import { AccountDipendenteComponent } from './account-dipendente/account-dipendente.component';
import { InserimentoCategoriaComponent } from './inserimento-categoria/inserimento-categoria.component';
import { InserimentoTecnologiaComponent } from './inserimento-tecnologia/inserimento-tecnologia.component';


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
    InserimentoTecnologiaComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
 HttpClientModule,
     ReactiveFormsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
