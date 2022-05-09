import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaComponent } from './conta/conta.component';
import { DoacoesComponent } from './historico/doacoes/doacoes.component';
import { RetiradasComponent } from './historico/retiradas/retiradas.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa.component';

const routes: Routes = [
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
    component: MapaComponent
  },
  {
    path: "historico/doacoes",
    component: DoacoesComponent
  },
  {
    path: "historico/retiradas",
    component: RetiradasComponent
  },
  {
    path: "conta",
    component: ContaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
