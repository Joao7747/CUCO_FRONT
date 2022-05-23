import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth-service';
import { GerenciamentoService } from '../shared/services/gerenciamento.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent {

  options : any;

  overlays: any[] | undefined;

  constructor(private gerenciamentoS: GerenciamentoService, private authS: AuthService) {}
    ngOnInit() {
        this.options = {
            center: {lat: -23.533773, lng: -46.625290},
            zoom: 12
        };
        console.log(this.authS.usuarioLogado, this.authS.mostrarMenuEmitter)
    }

  listaongs(){
    this.gerenciamentoS.listaOngs().subscribe(data => {
      console.log(data)
    })
  }
}