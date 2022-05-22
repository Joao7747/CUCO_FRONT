import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DecodeToken } from '../shared/models/token';
import { AuthService } from '../shared/services/auth-service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  constructor(private loginS: AuthService) { }
  decodeToken = new DecodeToken();
  display = false;
  items: MenuItem[] = [];

  ngOnInit(): void {
    let tipoConta = this.decodeToken.GetProperty("tipoconta");
    if(tipoConta == "ONG"){
      this.items = [
        {label: 'Parcerias', 
        items: [
        {
          label: 'Solicitações pendentes', 
          icon: 'pi pi-fw pi-plus',
          url: 'parcerias/solicitacoes', 
          target: '_self'
        }],
        icon: 'pi pi-fw pi-download', url: 'ongs'},
        {label: 'Carteira', icon: 'pi pi-fw pi-dollar', url: 'carteira', target: '_self'},
        {label: 'Histórico', 
        items: [
        {
          label: 'Retiradas', 
          icon: 'pi pi-fw pi-plus',
          url: 'historico/retiradas', 
          target: '_self'
        }
        ]},
        {label: 'Conta', icon: 'pi pi-fw pi-user', url: 'conta', target: '_self'},
        {label: 'Logout', icon: 'pi pi-fw pi-power-off', command: () => this.logout(), url: 'login',  target: '_self'}
    ];
    }
    else{
      this.items = [
        {label: 'Ongs', 
        items: [
          {
          label: 'Procurar ONG', 
          icon: 'pi pi-fw pi-plus',
          url: 'ong/procurar', 
          target: '_self'
        },
        {
          label: 'Solicitações pendentes', 
          icon: 'pi pi-fw pi-plus',
          url: 'ong/solicitacoes', 
          target: '_self'
        }]},
        {label: 'Carteira', icon: 'pi pi-fw pi-dollar', url: 'carteira'},
        {label: 'Histórico', 
        items: [
          {
          label: 'Doações', 
          icon: 'pi pi-fw pi-plus',
          url: 'historico/doacoes', 
          target: '_self'
        },
        {
          label: 'Entregas', 
          icon: 'pi pi-fw pi-plus',
          url: 'historico/retiradas',
          target: '_self'
        },
        ]},
        {label: 'Doar', icon: 'pi pi-fw pi-user', url: 'conta', target: '_self'},
        {label: 'Conta', icon: 'pi pi-fw pi-user', url: 'conta', target: '_self' },
        {label: 'Logout', icon: 'pi pi-fw pi-power-off', command: () => this.logout(), url: 'login',  target: '_self'}
    ];
    }
  }

  logout(){
    this.loginS.logout();
  }
}
