import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { canLeaveNewTask, resolveUserTasks } from "../resolve.functions";
import { TasksService } from "../tasks/tasks.service";

export const routes: Routes = [
  {
    path: "",
    providers: [TasksService],
    children: [
      { path: "", redirectTo: "tasks", pathMatch: "full" },
      {
        path: "tasks",
        component: TasksComponent,
        runGuardsAndResolvers: "always",
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: "tasks/new",
        component: NewTaskComponent,
        canDeactivate: [canLeaveNewTask],
      },
    ],
  },
];
