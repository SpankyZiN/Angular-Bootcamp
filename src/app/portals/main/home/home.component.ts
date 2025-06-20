import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
   imports: [CommonModule, ButtonModule, RouterOutlet, PanelMenuModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[] = [];
  nombreUsuario: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || 'Invitado';

    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/home' },
      { label: 'Clientes', icon: 'pi pi-users', routerLink: '/home/clientes' },
      { label: 'Cuentas', icon: 'pi pi-wallet', routerLink: '/cuentas' },
      { label: 'Transferencias', icon: 'pi pi-send', routerLink: '/transferencias' },
      { label: 'Bancos', icon: 'pi pi-warehouse', routerLink: '/bank' },
    ];
  }

  logout() {
    this.router.navigate(['/pub']);
  }
}
