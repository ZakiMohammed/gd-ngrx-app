import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-clear',
  templateUrl: './task-error.component.html',
})
export class TaskErrorComponent {
  constructor(private taskService: TaskService) {}

  get tasks() {
    return this.taskService.tasks;
  }

  get error() {
    return this.taskService.error;
  }
}
