import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { resolveUserTasks } from "../resolve.functions";

export const routes: Routes = [
  { path: "", redirectTo: "tasks", pathMatch: "full" },
  {
    path: "tasks",
    component: TasksComponent,
    runGuardsAndResolvers: "paramsOrQueryParamsChange",
    resolve: {
      userTasks: resolveUserTasks,
    },
  },
  { path: "tasks/new", component: NewTaskComponent },
];
