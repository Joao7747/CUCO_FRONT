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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    GMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
