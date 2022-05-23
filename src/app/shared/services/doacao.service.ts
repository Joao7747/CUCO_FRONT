import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CadastraDoacao } from '../models/cadastra-doacao-request';
import { HistoricoDoacao } from '../models/historico-doacao';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  constructor(private http: HttpClient) { }

  cadastrarDoacao(doacao: CadastraDoacao, id: String){
    return this.http.post<Result<any>>(environment.api_url + "Doacao/CadastraDoacao/" + id, doacao);

  }

  qrCodeLinkDoacao(){
    return this.http.get<Result<any>>(environment.api_url + "Doacao/QRCodeLinkDoacao");
  }

  geraTokenRetirada(){
    return this.http.get<Result<any>>(environment.api_url + "Doacao/GeraTokenRetirada");
  }

  validaToken(){
    return this.http.get<Result<any>>(environment.api_url + "Doacao/ValidaToken");
  }

  geraTokenEntrega(){
    return this.http.get<Result<any>>(environment.api_url + "Doacao/GeraTokenEntrega");
  }
}
