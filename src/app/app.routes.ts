import { Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {
  canActivateThis,
  canMatchThis,
  resolveTitle,
  resolveUserName,
} from "./resolve.functions";

export const routes: Routes = [
  { path: "", component: NoTaskComponent },
  {
    path: "users/:userId",
    component: UserTasksComponent,
    loadChildren: () => import("./users/users.routes").then((m) => m.routes),
    data: {
      message: "hello!",
    },
    resolve: {
      user: resolveUserName,
    },
    title: resolveTitle,
    canMatch: [canMatchThis],
    canActivate: [canActivateThis],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
