import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { UsersService } from "./users/users.service";
import { inject } from "@angular/core";
import { Task } from "./tasks/task/task.model";
import { TasksService } from "./tasks/tasks.service";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

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

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return resolveUserName(activatedRoute, routerState) + "'s Tasks";
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

export const canLeaveNewTask: CanDeactivateFn<NewTaskComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.submitted) return true;
  if (
    component.enteredTitle() ||
    component.enteredSummary() ||
    component.enteredDate()
  ) {
    return window.confirm("do you want to discard current inputs ?");
  }
  return true;
};

export const canActivateThis: CanActivateFn = (route, state) => {
  console.log("allowed");
  return true;
};

export const canMatchThis: CanMatchFn = (route, segments) => {
  return true;
};
