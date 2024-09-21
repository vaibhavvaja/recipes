import { Component, computed, inject, signal } from "@angular/core";

import { TaskItemComponent } from "./task-item/task-item.component";
import { TaskService } from "../task.service";

@Component({
  selector: "app-tasks-list",
  standalone: true,
  templateUrl: "./tasks-list.component.html",
  styleUrl: "./tasks-list.component.css",
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = "all";
  taskService = inject(TaskService);
  get tasks() {
    switch (this.selectedFilter) {
      case "open":
        return this.taskService.tasks.filter((task) => task.status === "OPEN");
      case "in-progress":
        return this.taskService.tasks.filter(
          (task) => task.status === "IN_PROGRESS"
        );
      case "done":
        return this.taskService.tasks.filter((task) => task.status === "DONE");
      default:
        return this.taskService.tasks;
    }
  }

  onChangeTasksFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
