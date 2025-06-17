import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
   imports: [CommonModule, MenubarModule, ButtonModule],
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
      { label: 'Clientes', icon: 'pi pi-users', routerLink: '/clientes' },
      { label: 'Cuentas', icon: 'pi pi-wallet', routerLink: '/cuentas' },
      { label: 'Transferencias', icon: 'pi pi-send', routerLink: '/transferencias' },
    ];
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/pub']);
  }
}
