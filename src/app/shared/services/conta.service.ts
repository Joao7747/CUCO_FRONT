import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Conta } from '../models/criar-conta-request';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  excluir(id: string){
    return this.http.delete<Result<any>>(environment.api_url + "Conta/Excluir/" + id);
  }

  cadastrar(conta: Conta){
    return this.http.post<Result<any>>(environment.api_url + "Conta/Cadastrar", conta);
  }

  resetarSenha(id: string, senha: string){
    return this.http.post<Result<any>>(environment.api_url + "Conta/ResetarSenha/" + id, senha);
  }

  editarConta(id: string, conta: Conta){
    return this.http.put<Result<any>>(environment.api_url + "Conta/Editar/" + id, conta);
  }

  enviaEmailResetSenha(email: string){
    return this.http.post<Result<any>>(environment.api_url + "Conta/EnviaEmailResetSenha", email);
  }
}
