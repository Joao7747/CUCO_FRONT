import { Component, OnInit } from '@angular/core';
import { DecodeToken } from 'src/app/shared/models/token';
import { GerenciamentoService } from 'src/app/shared/services/gerenciamento.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-listar-solicitacoes',
  templateUrl: './listar-solicitacoes.component.html',
  styleUrls: ['./listar-solicitacoes.component.css'],
  providers: [ConfirmationService]
})
export class ListarSolicitacoesComponent implements OnInit {
  solicitacoes: any;
  decode = new DecodeToken();
  tipoConta = this.decode.GetProperty("tipoconta");
  constructor(private gerenciamentoS: GerenciamentoService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    if(this.tipoConta == 'ONG'){
      this.listaSolicitacoesOng();
    }
    else{
      this.listaSolicitacoesRes();
    }
  }

  listaSolicitacoesOng(){
    let decode = new DecodeToken();
    let id = decode.GetProperty("idestabelecimento");
    this.gerenciamentoS.listaSolicitacoes(id).subscribe(data => {
      this.solicitacoes = data.content;
    })
  }

  listaSolicitacoesRes(){
    let decode = new DecodeToken();
    let id = decode.GetProperty("idestabelecimento");
    this.gerenciamentoS.listaSolicitacaoParaRes(id).subscribe(data => {
      this.solicitacoes = data.content;
    })
  }

  confirmaSolicitacao(id: string){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja fazer parceria com essa instituição?',
      header: 'Atenção',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.gerenciamentoS.aceitarSolicitacoesDeEstabelecimentos(id).subscribe(data => {
          alert(data.messages)
        })
      }
  });
  }

  cancelaSolicitacao(id: string){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja cancelar a parceria com essa instituição?',
      header: 'Atenção',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.gerenciamentoS.recusarSolicitacoesDeEstabelecimentos(id).subscribe(data => {
          alert(data.messages);
        }, (err) => alert(err.message),
        () => this.listaSolicitacoesOng())
      }
  });
  }

  excluiSolicitacao(id: string){
    console.log(id)
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir a solicitação de parceria com essa instituição?',
      header: 'Atenção',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.gerenciamentoS.excluirSolicitacoesDeEstabelecimentos(id).subscribe(data => {
          alert(data.messages);
        }, (err) => alert(err.message),
        () => this.listaSolicitacoesRes())
      }
  });
  }
}
