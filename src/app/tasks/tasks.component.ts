import { Component, Input } from "@angular/core";

import { TasksService } from "./tasks.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  addNewTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  onOpenTask() {
    this.addNewTask = true;
  }
}
