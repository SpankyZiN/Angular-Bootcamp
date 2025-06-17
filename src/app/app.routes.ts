import { Routes } from '@angular/router';
import { Pub } from './portals/pub/pub.component';
import { HomeComponent } from './portals/main/home/home.component';


export const routes: Routes = [
    { path: '', component: Pub },
    { path: 'home', component: HomeComponent },
    {
  path: 'clientes',
  loadComponent: () =>
    import('./modules/customer/components/customer-table/customer-table.component').then(
      m => m.CustomerTableComponent
    )
}
];
