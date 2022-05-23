import { Component, OnInit } from '@angular/core';
import { HistoricoDoacao } from 'src/app/shared/models/historico-doacao';
import { DecodeToken } from 'src/app/shared/models/token';
import { GerenciamentoService } from 'src/app/shared/services/gerenciamento.service';

@Component({
  selector: 'app-retiradas',
  templateUrl: './retiradas.component.html',
  styleUrls: ['./retiradas.component.css']
})
export class RetiradasComponent implements OnInit {

  retiradas: any;

  constructor(private gerenciamentoS: GerenciamentoService) { }

  ngOnInit(): void {
    this.listaHistorico();
  }

  listaHistorico(){
    let decode = new DecodeToken();
    let id = decode.GetProperty("idestabelecimento");
    this.gerenciamentoS.historicoRetiradas(id).subscribe(data => {
      this.retiradas = data.content;
    })
  }
}
