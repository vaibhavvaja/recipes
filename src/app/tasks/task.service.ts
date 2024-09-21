import { Injectable, signal } from "@angular/core";

import { Task, TaskStatus } from "./task.model";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor() {}

  tasks: Task[] = [];

  addTask(title: string, description: string) {
    const task: Task = {
      id: Math.random() + "",
      title: title,
      description: description,
      status: "OPEN",
    };
    this.tasks.push(task);
  }

  changeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = "OPEN";

    switch (status) {
      case "open":
        newStatus = "OPEN";
        break;
      case "in-progress":
        newStatus = "IN_PROGRESS";
        break;
      case "done":
        newStatus = "DONE";
        break;
      default:
        break;
    }

    this.tasks = this.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
  }
}
