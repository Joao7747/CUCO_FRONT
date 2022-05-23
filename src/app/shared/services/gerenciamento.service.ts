import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GeraSolicitacaoParceriaRequest } from '../models/gera-solicitacao-parceria-request';
import { HistoricoDoacao } from '../models/historico-doacao';
import { ListOngs } from '../models/lista-ongs';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class GerenciamentoService {

  constructor(private http: HttpClient) { }

  historicoDoacoes(id: string){
    return this.http.get<Result<HistoricoDoacao[]>>(environment.api_url + "Gerenciamento/HistoricoDoacoes/" + id);
  }

  historicoRetiradas(id: string){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/HistoricoRetiradas/" + id);
  }

  listaOngs(){
    return this.http.get<Result<ListOngs[]>>(environment.api_url + "Gerenciamento/ListaOngs");
  }

  aceitarSolicitacoesDeEstabelecimentos(id: string){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/AceitarSolicitacoesDeEstabelecimentos/" + id);
  }

  recusarSolicitacoesDeEstabelecimentos(id: string){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/RecusaSolicitacoesDeEstabelecimentos/" + id);
  }

  excluirSolicitacoesDeEstabelecimentos(id: string){
    return this.http.delete<Result<any>>(environment.api_url + "Gerenciamento/ExcluirSolicitacoesDeEstabelecimentos/" + id);
  }

  historicoEntregas(){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/ListaOngs");
  }

  geraSolicitacaoParaOng(solicitacao: GeraSolicitacaoParceriaRequest){
    return this.http.post<Result<any>>(environment.api_url + "Gerenciamento/GeraSolicitacaoParceriaParaOng", solicitacao);
  }

  listaSolicitacaoParaRes(id: string){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/listaSolicitacoesParaEstabelecimento/" + id);
  }

  listaSolicitacoes(id: string){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/listaSolicitacoesParaOng/"+id);
  }
}
