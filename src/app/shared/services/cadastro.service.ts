import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpCliente: HttpClient) { }


  buscar(cep:String){
    return this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
