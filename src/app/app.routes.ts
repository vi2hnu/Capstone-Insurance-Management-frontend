import { Routes } from '@angular/router';
import { authGuardGuard } from './core/guard/auth-guard-guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'claims-officer',
    loadChildren: () =>
      import('./features/claims-officer/claims-officer-module')
        .then(m => m.ClaimsOfficerModule),
    canActivate: [authGuardGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/plans/plans-module').then(m => m.PlansModule),
    canActivate: [authGuardGuard]
  },
  {
    path: 'enrollment',
    loadChildren: () =>
      import('./features/enrollment/enrollment-module')
        .then(m => m.EnrollmentModule)
  }

];
