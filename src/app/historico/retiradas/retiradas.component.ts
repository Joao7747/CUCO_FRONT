import { Component, OnInit } from '@angular/core';
import { HistoricoDoacao } from 'src/app/shared/models/historico-doacao';
import { DoacaoService } from 'src/app/shared/services/doacao.service';

@Component({
  selector: 'app-retiradas',
  templateUrl: './retiradas.component.html',
  styleUrls: ['./retiradas.component.css']
})
export class RetiradasComponent implements OnInit {

  doacoes: HistoricoDoacao[] = [];

  constructor(private doacaoService: DoacaoService) { }

  ngOnInit(): void {
    this.doacaoService.getDoacoes().then(doacoes => this.doacoes = doacoes);
  }

}
