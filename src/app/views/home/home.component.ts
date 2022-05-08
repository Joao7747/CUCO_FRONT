import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  display = false;
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {label: 'Conta', icon: 'pi pi-fw pi-user'},
      {label: 'Ongs', icon: 'pi pi-fw pi-download'},
      {label: 'Logout', icon: 'pi pi-fw pi-power-off'}
  ];
  }

}
