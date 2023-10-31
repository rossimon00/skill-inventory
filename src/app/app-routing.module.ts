import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDipendenteComponent } from './login-dipendente/login-dipendente.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MessageComponent } from './message/message.component';
import { ListaDiTecnologieComponent } from './lista-di-tecnologie/lista-di-tecnologie.component';
import { RegistrazioneDipendenteComponent } from './registrazione-dipendente/registrazione-dipendente.component';
import { LoginHrComponent } from './login-hr/login-hr.component';
import { WelcomeHrComponent } from './welcome-hr/welcome-hr.component';
import { WelcomeDipendenteComponent } from './welcome-dipendente/welcome-dipendente.component';
import { AccountDipendenteComponent } from './account-dipendente/account-dipendente.component';



const routes: Routes = [
  {path:'account-dipendente',component:AccountDipendenteComponent},
  {path:'welcome-dipendente', component:WelcomeDipendenteComponent},
  {path:'login', component: LoginDipendenteComponent},
  {path:'login-hr', component: LoginHrComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'welcome-hr', component: WelcomeHrComponent},
  { path: 'message', component: MessageComponent},
  {path: '',redirectTo:'welcome', pathMatch:'full'},
  {path:'tecnologie', component: ListaDiTecnologieComponent},
  {path:'registrazione-dipendente', component:RegistrazioneDipendenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
