import { Component, OnInit } from '@angular/core';
import { ListOngs } from '../shared/models/lista-ongs';
import { GerenciamentoService } from '../shared/services/gerenciamento.service';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit {
  ongs!: ListOngs[];
  constructor(private gerenciamentoS: GerenciamentoService) { }

  ngOnInit(): void {
    this.listarOngs();
  }

  listarOngs(){
    this.gerenciamentoS.listaOngs().subscribe(data => {
      this.ongs = data.content;
    })
  }
}
