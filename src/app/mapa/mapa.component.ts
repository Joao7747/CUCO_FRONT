import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent {

  options : any;

  overlays: any[] | undefined;

  constructor() {}
    ngOnInit() {
        this.options = {
            center: {lat: -23.533773, lng: -46.625290},
            zoom: 12
        };
    }
}