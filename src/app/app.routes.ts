import {Routes} from '@angular/router';
import {authGuard} from './services/security/auth.guard';
import {CustomerService} from './modules/customer/services/customer.service';
import {Pub} from './portals/pub/pub.component';


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
          loadComponent: () => import('../app/modules/customer/pages/customer.page/customer.page.component').then((m) => m.CustomerPage),
          canActivate: [authGuard],
        },
      ]
    },
     {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo:
        'login'
    }
  ]
;

