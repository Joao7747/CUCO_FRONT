import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class GerenciamentoService {

  constructor(private http: HttpClient) { }

  historicoDoacoes(){

  }

  historicoRetiradas(){

  }

  listaOngs(){
    return this.http.get<Result<any>>("http://localhost:3000/api/v1/Gerenciamento/ListaOngs");
  }

  aceitarSolicitacoesDeEstabelecimentos(){

  }

  historicoEntregas(){

  }

  geraSolicitacaoParaOng(){

  }

  listaSolicitacoes(){
    
  }
}
