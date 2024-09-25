import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { UsersService } from "./users/users.service";
import { inject } from "@angular/core";

export const resolveUserName: ResolveFn<string> = (
  activateRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activateRoute.paramMap.get("userId")
    )?.name || "";
  return userName;
};
