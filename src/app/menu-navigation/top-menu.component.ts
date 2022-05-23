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
  nome!: string;

  ngOnInit(): void {
    let tipoConta = this.decodeToken.GetProperty("tipoconta");
    this.nome = this.decodeToken. GetProperty("nome");
    if(tipoConta == "ONG"){
      this.items = [
        {label: 'Parcerias', 
        items: [
        {
          label: 'Solicitações pendentes', 
          icon: 'pi pi-fw pi-plus',
          // url: 'parcerias/solicitacoes', 
          routerLink: 'ongs',
          target: '_self',
          command: () => this.display = false
        }]},
        {label: 'Carteira', icon: 'pi pi-fw pi-dollar', routerLink: 'carteira', target: '_self',command: () => this.display = false},
        {label: 'Histórico', 
        items: [
        {
          label: 'Retiradas', 
          icon: 'pi pi-fw pi-plus',
          routerLink: 'historico/retiradas', 
          target: '_self',
          command: () => this.display = false
        }
        ]},
        {label: 'Conta', icon: 'pi pi-fw pi-user', routerLink: 'conta', command: () => this.display = false, target: '_self'},
        {label: 'Logout', icon: 'pi pi-fw pi-power-off', command: () => this.logout(), routerLink: 'login',  target: '_self'}
    ];
    }
    else{
      this.items = [
        {label: 'Ongs', 
        items: [
          {
          label: 'Procurar ONG', 
          icon: 'pi pi-fw pi-plus',
          routerLink: 'ongs', 
          target: '_self',
          command: () => this.display = false
        },
        {
          label: 'Solicitações pendentes', 
          icon: 'pi pi-fw pi-plus',
          routerLink: 'ong/solicitacoes', 
          target: '_self',
          command: () => this.display = false
        }]},
        {label: 'Carteira', icon: 'pi pi-fw pi-dollar', routerLink: 'carteira'},
        {label: 'Histórico', 
        items: [
          {
          label: 'Doações', 
          icon: 'pi pi-fw pi-plus',
          routerLink: 'historico/doacoes', 
          target: '_self',
          command: () => this.display = false
        },
        {
          label: 'Entregas', 
          icon: 'pi pi-fw pi-plus',
          routerLink: 'historico/retiradas',
          target: '_self',
          command: () => this.display = false
        },
        ]},
        {label: 'Doar', icon: 'pi pi-fw pi-user', routerLink: '/conta', target: '_self', command: () => this.display = false},
        {label: 'Conta', icon: 'pi pi-fw pi-user', routerLink: '/conta', target: '_self', command: () => this.display = false },
        {label: 'Logout', icon: 'pi pi-fw pi-power-off', command: () => this.logout(), routerLink: '/login',  target: '_self'}
    ];
    }
  }

  logout(){
    this.loginS.mostrarMenuEmitter.emit(false);
    this.loginS.logout();
  }
}
