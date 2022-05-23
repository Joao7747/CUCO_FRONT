import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Conta } from 'src/app/shared/models/criar-conta-request';
import { ContaService } from 'src/app/shared/services/conta.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  tipoConta!: string;
  constructor(private fb: FormBuilder, private contaS: ContaService, private route: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      user: [null],
      password: [null],
      confirm_password: [null],
      nome: [null],
      cpf: [null],
      cnpj: [null],
      cidade: [null],
      estado: [null],
      endereco: [null],
      email: [null],
      contato: [null],
      estabelecimento: [null]
    });
  }

  cadastrar(){
    console.log(this.control("password").value, this.control("confirm_password").value)
    if(this.control("password").value !== this.control("confirm_password").value){
      alert('As senhas digitadas não conferem.')
    }
    else{
      let conta = {} as Conta;
      conta.cidade = this.control("cidade").value
      if(this.control("cnpj").value == null){
        conta.cnpj = "0";
      }
      else{
        conta.cnpj = this.control("cnpj").value
      }
      conta.contato = this.control("contato").value
      conta.cpf = this.control("cpf").value
      conta.email = this.control("user").value
      conta.emailEstabelecimento = this.control("email").value
      conta.endereco = this.control("endereco").value
      conta.estado = this.control("estado").value
      conta.nome = this.control("nome").value
      conta.nomeEstabelecimento = this.control("estabelecimento").value
      conta.senha = this.control("password").value
      conta.tipoConta = this.tipoConta;
      conta.tipoEstabelecimento = this.tipoConta;
      this.contaS.cadastrar(conta).subscribe(data =>{
        if(data){
          alert(data.messages);
          this.route.navigate(['login']);
        }
      });
    }
  }

  control(control: string) {
    return this.cadastroForm.get(control) as AbstractControl;
  }
}
