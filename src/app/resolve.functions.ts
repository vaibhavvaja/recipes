import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { UsersService } from "./users/users.service";
import { inject } from "@angular/core";
import { Task } from "./tasks/task/task.model";
import { TasksService } from "./tasks/tasks.service";

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

export const resolveUserTasks: ResolveFn<Task[]> = (
  activateRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const taskService = inject(TasksService);

  const userTasks = taskService
    .allTasks()
    .filter((task) => task.userId === activateRoute.paramMap.get("userId"))
    .sort((a, b) => {
      if (activateRoute.queryParamMap.get("order") === "asc") {
        return a.id > b.id ? -1 : 1;
      } else {
        return a.id > b.id ? 1 : -1;
      }
    });

  return userTasks;
};
