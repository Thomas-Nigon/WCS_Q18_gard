import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user.service';

export const isConnectedGuard: CanActivateFn = (route, state) => {
  const userService: UserService = inject(UserService);
  const router = inject(Router);

  if (userService.isConnected()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
