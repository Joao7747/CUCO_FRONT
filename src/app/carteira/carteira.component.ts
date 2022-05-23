import { Component, OnInit } from '@angular/core';
import { DecodeToken } from '../shared/models/token';
import { CarteiraService } from '../shared/services/carteira.service';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {
  carteira: any;
  decode = new DecodeToken();
  value!: number;
  constructor(private carteiraS: CarteiraService) { }

  ngOnInit(): void {
    if(this.decode.GetProperty("tipoconta") == "ONG"){
      this.carteiraOng();
    }
    else{
      this.carteiraRestaurante();
    }
  }

  carteiraRestaurante(){
    
    let id = this.decode.GetProperty("idestabelecimento");
    this.carteiraS.listaCarteiraRestaurante(id).subscribe(data => {
      this.carteira = data.content;
      this.value = ((data.content[0].valorAtual * 100)/data.content[0].metaFinal)
    })
  }

  carteiraOng(){
    let id = this.decode.GetProperty("idestabelecimento");
    this.carteiraS.listaCarteiraOng(id).subscribe(data => {
      this.carteira = data.content;
      this.value = ((data.content[0].valorAtual * 100)/data.content[0].metaFinal)
    })
  }
}
