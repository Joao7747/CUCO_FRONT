import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GeraSolicitacaoParceriaRequest } from '../models/gera-solicitacao-parceria-request';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class GerenciamentoService {

  constructor(private http: HttpClient) { }

  historicoDoacoes(){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/HistoricoDoacoes");
  }

  historicoRetiradas(){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/HistoricoRetiradas");
  }

  listaOngs(){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/ListaOngs");
  }

  aceitarSolicitacoesDeEstabelecimentos(){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/AceitarSolicitacoesDeEstabelecimentos");
  }

  recusarSolicitacoesDeEstabelecimentos(){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/RecusaSolicitacoesDeEstabelecimentos");
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

  listaSolicitacoes(){
    return this.http.get<Result<any>>(environment.api_url + "Gerenciamento/listaSolicitacoesParaOng");
  }
}
