import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user.service';
import { inject } from '@angular/core';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const userService: UserService = inject(UserService);
  const router = inject(Router);

  if (userService.isConnected() && userService.checkRole() === 'admin') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
