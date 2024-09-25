import { Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { routes as userRoutes } from "./users/users.routes";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
  { path: "", component: NoTaskComponent },
  {
    path: "users/:userId",
    component: UserTasksComponent,
    children: userRoutes,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
