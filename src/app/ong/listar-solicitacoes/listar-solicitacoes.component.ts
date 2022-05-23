import { Component, OnInit } from '@angular/core';
import { GerenciamentoService } from 'src/app/shared/services/gerenciamento.service';

@Component({
  selector: 'app-listar-solicitacoes',
  templateUrl: './listar-solicitacoes.component.html',
  styleUrls: ['./listar-solicitacoes.component.css']
})
export class ListarSolicitacoesComponent implements OnInit {
  solicitacoes: any;
  constructor(private gerenciamentoS: GerenciamentoService) { }

  ngOnInit(): void {
  }

  listaSolicitacoes(){
    this.gerenciamentoS.listaSolicitacoes().subscribe(data => {
      this.solicitacoes = data.content;
    })
  }
}
