import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaComponent } from './conta/conta.component';
import { DoacoesComponent } from './historico/doacoes/doacoes.component';
import { RetiradasComponent } from './historico/retiradas/retiradas.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa.component';
import { OngComponent } from './ong/ong.component';
import { AuthGuard } from './shared/helpers/auth-guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cadastro",
    component: CadastroComponent
  },
  {
    path: "ongs",
    component: OngComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "historico/doacoes",
    component: DoacoesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "historico/retiradas",
    component: RetiradasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "conta",
    component: ContaComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
