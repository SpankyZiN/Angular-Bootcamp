import { Routes } from '@angular/router';
import { Pub } from './portals/pub/pub.component';
import { HomeComponent } from './portals/main/home/home.component';
import { CustomerTableComponent } from './modules/customer/components/customer-table/customer-table.component';
import { authGuard } from './services/security/auth.guard';


export const routes: Routes = [
  {
    path: '', component: Pub
  },
    {
      path: 'home',
      loadComponent: () => import('./portals/main/home/home.component').then((m) => m.HomeComponent),
      canActivate: [authGuard],
      children: [
        {
          path: 'clientes',
          loadComponent: () => import('./modules/customer/components/customer-table/customer-table.component').then((m) => m.CustomerTableComponent),
          canActivate: [authGuard],
        },
      ]
    },
];
