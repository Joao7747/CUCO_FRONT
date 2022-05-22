import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoricoDoacao } from '../models/historico-doacao';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  constructor(private http: HttpClient) { }

  getDoacoes() {
    return this.http.get<any>('assets/table-mock.json')
        .toPromise()
        .then(res => <HistoricoDoacao[]>res.data)
        .then(data => { return data; });
}

  cadastrarDoacao(){

  }

  qrCodeLinkDoacao(){

  }

  geraTokenRetirada(){

  }

  validaToken(){

  }

  geraTokenEntrega(){
    
  }
}
