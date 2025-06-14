import { Routes } from '@angular/router';
import { Pub } from './portals/pub/pub';
import { Main } from './portals/main/main';

export const routes: Routes = [
    { path: '', component: Pub},
    { path: 'main', component: Main},
];

export class AppRoutingModule {}
