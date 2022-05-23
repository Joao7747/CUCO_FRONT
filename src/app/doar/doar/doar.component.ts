import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CadastraDoacao } from 'src/app/shared/models/cadastra-doacao-request';
import { CarteiraService } from 'src/app/shared/services/carteira.service';
import { DoacaoService } from 'src/app/shared/services/doacao.service';

@Component({
  selector: 'app-doar',
  templateUrl: './doar.component.html',
  styleUrls: ['./doar.component.css']
})
export class DoarComponent implements OnInit {
  id!: String;
  doarForm!: FormGroup;
  constructor(private carteiraS: CarteiraService, private doacaoS: DoacaoService, private fb: FormBuilder, private route: ActivatedRoute) {

    this.route.params.subscribe(params => this.id = params["id"]);

  }

  ngOnInit(): void {
    this.doarForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: [null],
      cpf: [null],
      email: [null],
      qtdeDoacao: [null],
      valorTotal:[{value: null, disabled: true}]
    });
  }

  valorTotal(event: any) {
    // var valorBase = 0;
    this.carteiraS.pegarValorPrato(this.id).subscribe(
      data => {
        this.control("valorTotal").patchValue( event.target.value * data.content);
      }
    );
    // console.log(event.target.value);
    // console.log(valorBase);
    // let valorTotal = event.target.value * valorBase;
    // console.log(valorTotal);
    // this.control("valorTotal").patchValue(valorTotal);
  }


  doar(){

    let doacao = {} as CadastraDoacao;
    doacao.nome = this.control("name").value;
    console.log(doacao.nome);
    doacao.cpf = this.control("cpf").value;
    console.log(doacao.cpf);
    doacao.email = this.control("email").value;
    console.log(doacao.email);
    doacao.valorDoacao = this.control("valorTotal").value;
    console.log(doacao.valorDoacao);
    this.doacaoS.cadastrarDoacao(doacao, this.id).subscribe(data => {
      if(data.content){
        alert(data.messages);
      }
    });
    console.log("Doação realizada com sucesso!");
  }
  control(control: string) {
    return this.doarForm.get(control) as AbstractControl;
  }

}
