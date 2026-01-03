import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'auth', loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule)},
    {path: 'claims-officer', loadChildren: () => import('./features/claims-officer/claims-officer-module').then(m => m.ClaimsOfficerModule)},
];
