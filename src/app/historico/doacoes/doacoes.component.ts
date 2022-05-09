import { Component, OnInit } from '@angular/core';
import { HistoricoDoacao } from 'src/app/shared/models/historico-doacao';
import { DoacaoService } from 'src/app/shared/services/doacao.service';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.component.html',
  styleUrls: ['./doacoes.component.css']
})
export class DoacoesComponent implements OnInit {

  doacoes: HistoricoDoacao[] = [];

  constructor(private doacaoService: DoacaoService) { }

  ngOnInit(): void {
    this.doacaoService.getDoacoes().then(doacoes => this.doacoes = doacoes);
  }

}
