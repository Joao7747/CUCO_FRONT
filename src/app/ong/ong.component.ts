import { Component, OnInit } from '@angular/core';
import { ListOngs } from '../shared/models/lista-ongs';
import { GerenciamentoService } from '../shared/services/gerenciamento.service';
import {GeraSolicitacaoParceriaRequest} from '../shared/models/gera-solicitacao-parceria-request';
import { DecodeToken } from '../shared/models/token';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit {
  ongs!: ListOngs[];
  displayDialog = false;
  solicitacao = {} as GeraSolicitacaoParceriaRequest;
  constructor(private gerenciamentoS: GerenciamentoService) { }

  ngOnInit(): void {
    this.listarOngs();
  }

  listarOngs(){
    this.gerenciamentoS.listaOngs().subscribe(data => {
      this.ongs = data.content;
    })
  }

  geraSolicitacaoParaOng(){
    this.gerenciamentoS.geraSolicitacaoParaOng(this.solicitacao).subscribe(data =>{
      if(data.content){
        alert('Solicitação enviada com sucesso!');
      }
    },
    (err) => alert(err.message))
  }

  setValues(ong: ListOngs){
    let decode = new DecodeToken();
    let idRestaurante = decode.GetProperty("idestabelecimento")
    this.solicitacao.idOng = ong._id;
    this.solicitacao.idRestaurante = idRestaurante;
  }
}
