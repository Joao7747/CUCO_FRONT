import { Component, OnInit } from '@angular/core';
import { HistoricoDoacao } from 'src/app/shared/models/historico-doacao';
import { DecodeToken } from 'src/app/shared/models/token';
import { GerenciamentoService } from 'src/app/shared/services/gerenciamento.service';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.component.html',
  styleUrls: ['./doacoes.component.css']
})
export class DoacoesComponent implements OnInit {

  doacoes: HistoricoDoacao[] = [];

  constructor(private gerenciamentoS: GerenciamentoService) { }

  ngOnInit(): void {
    this.listaHistorico();
  }

  listaHistorico(){
    let decode = new DecodeToken();
    let id = decode.GetProperty("idestabelecimento");
    this.gerenciamentoS.historicoDoacoes(id).subscribe(data => {
      this.doacoes = data.content;
    })
  }
}
