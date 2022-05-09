import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  constructor() { }

  display = false;
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      
      {label: 'Ongs', icon: 'pi pi-fw pi-download', url: 'ongs'},
      {label: 'Carteira', icon: 'pi pi-fw pi-dollar', url: 'carteira'},
      {label: 'Histórico', 
      items: [
        {
        label: 'Doações', 
        icon: 'pi pi-fw pi-plus',
        url: 'historico/doacoes'
      },
      {
        label: 'Retiradas', 
        icon: 'pi pi-fw pi-plus',
        url: 'historico/retiradas'
      },
      ],
      icon: 'pi pi-fw pi-dollar'},
      {label: 'Conta', icon: 'pi pi-fw pi-user', url: 'conta'},
      {label: 'Logout', icon: 'pi pi-fw pi-power-off', url: 'login'}
  ];
  }
}
