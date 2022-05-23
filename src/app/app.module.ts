import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MapaComponent } from './mapa/mapa.component';
import {GMapModule} from 'primeng/gmap';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { DoacoesComponent } from './historico/doacoes/doacoes.component';
import { RetiradasComponent } from './historico/retiradas/retiradas.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContaComponent } from './conta/conta.component';
import { TopMenuComponent } from './menu-navigation/top-menu.component';
import { HomeComponent } from './home/home.component';
import { OngComponent } from './ong/ong.component';

import { ReactiveFormsModule, Form, FormsModule } from '@angular/forms';
import { JwtInterceptor } from './shared/helpers/jwt-interceptor';

//PrimeNg
import {ButtonModule} from 'primeng/button';
import { ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import { ListarSolicitacoesComponent } from './ong/listar-solicitacoes/listar-solicitacoes.component';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    LoginComponent,
    CadastroComponent,
    DoacoesComponent,
    RetiradasComponent,
    ContaComponent,
    TopMenuComponent,
    HomeComponent,
    OngComponent,
    ListarSolicitacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    GMapModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    InputTextModule,
    TableModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
