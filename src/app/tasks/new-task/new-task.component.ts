import { Component, EventEmitter, inject, Input, Output } from "@angular/core";

import { TasksService } from "../tasks.service";

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;
  inputTitle = "";
  inputSummary = "";
  inputDueDate = "";
  private tasksService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onAddTask() {
    this.tasksService.addNewTask(
      {
        title: this.inputTitle,
        summary: this.inputSummary,
        dueDate: this.inputDueDate,
      },
      this.userId
    );
    this.onClose();
  }
}
