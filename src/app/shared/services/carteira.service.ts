import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Carteira } from '../models/insere-carteira';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  constructor(private http: HttpClient) { }

  insereCarteira(carteira: Carteira){
    return this.http.post<Result<any>>(environment.api_url + "Carteira/InsereCarteira", carteira);
  }

  enviaEmail(){
    return this.http.get<Result<any>>(environment.api_url + "Carteira/EnviaEmail");
  }

  listaCarteira(){
    return this.http.get<Result<any>>(environment.api_url + "Carteira/ListaCarteira");
  }

  listaCarteiraById(){
    return this.http.get<Result<any>>(environment.api_url + "Carteira/ListaCarteiraId");
  }

  editaCarteira(carteira: Carteira){
    return this.http.put<Result<any>>(environment.api_url + "Carteira/EditaCarteira", carteira);
  }

  deletaCarteira(id: string){
    return this.http.delete<Result<any>>(environment.api_url + "Carteira/DeletaCarteira/" + id);
  }

  editaValorPrato(valor: number){
    return this.http.put<Result<any>>(environment.api_url + "Carteira/EditaValorPrato", valor);
  }
}
