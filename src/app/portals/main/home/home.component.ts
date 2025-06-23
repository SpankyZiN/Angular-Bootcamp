import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import {AppSecurityService} from '../../../services/security/app-security.service';
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from '../../profile/profile/profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
   imports: [CommonModule, ButtonModule, RouterOutlet, PanelMenuModule, MenuModule, FormsModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  items: MenuItem[] = [];
  nombreUsuario: string = '';

  constructor(private appSecurityService: AppSecurityService,
              private router: Router,) {
  }
  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || 'NN';

    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: ['/home'] },
      { label: 'Clientes', icon: 'pi pi-users', routerLink: ['/home/clientes'] },
      { label: 'Cuentas', icon: 'pi pi-wallet', routerLink: ['/cuentas'] },
      { label: 'Transferencias', icon: 'pi pi-send', routerLink: ['/transferencias'] },
      { label: 'Bancos', icon: 'pi pi-warehouse', routerLink: ['/home/banks'] },
    ];
  }

  userMenuItems: MenuItem[] = [
    {label: 'Perfil', icon: 'pi pi-user', command: () => this.goToProfile()},
    {label: 'Cerrar sesión', icon: 'pi pi-sign-out', command: () => this.logout()}
  ];

  logout() {
    this.appSecurityService.logout();
    this.router.navigate(['/pub']);
  }

  goToProfile() {
    this.router.navigate(['../profile/profile.component']).then(r => ProfileComponent);
  }

}


