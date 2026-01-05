import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Roleservice } from '../../service/roleservice';

export const roleGuard: CanActivateFn = (route, state) => {

  const roleService = inject(Roleservice);
  const allowedRoles = route.data['role'] as string[];
  const role = roleService.getRole();
  const router = inject(Router);

  if(role!=null && allowedRoles.includes(role)){
    return true;
  }
  router.navigate(['/auth/login']);
  return false;

};
