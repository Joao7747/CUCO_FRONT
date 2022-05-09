import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MapaComponent } from './views/home/mapa/mapa.component';
import {GMapModule} from 'primeng/gmap';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { DoacoesComponent } from './historico/doacoes/doacoes.component';
import { RetiradasComponent } from './historico/retiradas/retiradas.component';

//PrimeNg
import {ButtonModule} from 'primeng/button';
import { ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ContaComponent } from './conta/conta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapaComponent,
    LoginComponent,
    CadastroComponent,
    DoacoesComponent,
    RetiradasComponent,
    ContaComponent
    
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
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
