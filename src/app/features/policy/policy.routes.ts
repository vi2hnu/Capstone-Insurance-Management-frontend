import { Routes } from '@angular/router';
import { YourPolicies } from './page/your-policies/your-policies';

export const POLICY_ROUTE: Routes = [
  {
    path: '',
    component: YourPolicies
    ,title: 'Your policies'
  }
];
