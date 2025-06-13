import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Main } from './portals/main/main';

export const routes: Routes = [
    { path: '', component: Login},
    { path: 'main', component: Main},
];

export class AppRoutingModule {}
