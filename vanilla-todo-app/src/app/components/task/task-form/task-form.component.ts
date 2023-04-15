import { Component } from '@angular/core';
import { map, catchError, of, finalize } from 'rxjs';
import { TaskHttpService } from 'src/app/http/task.http.service';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  title = '';

  constructor(private taskService: TaskService, private taskHttpService: TaskHttpService) {}

  handleSubmit() {
    if (this.title === '') {
      alert('Please enter title of your task');
      return;
    }

    const newTask: Task = {
      _id: uuid(),
      title: this.title,
    };

    this.taskService.setLoading(true);
    this.taskHttpService
      .add(newTask)
      .pipe(
        map(task => {
          this.taskService.tasks.push(task);
          this.title = '';
        }),
        catchError(error => of(this.taskService.setError(error.message))),
        finalize(() => this.taskService.setLoading(false))
      )
      .subscribe();
  }
}
