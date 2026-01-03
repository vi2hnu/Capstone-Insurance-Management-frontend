import { Routes } from '@angular/router';
import { EnrollPage } from './page/enroll-page/enroll-page';

export const ENROLLMENT_ROUTE: Routes = [
  {
    path: ':planId',
    component: EnrollPage
  }
];
