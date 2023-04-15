import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, catchError, of, finalize } from 'rxjs';
import { TaskHttpService } from 'src/app/http/task.http.service';
import { Task } from 'src/app/models/task';
import { addTask, setError, setLoading } from 'src/app/store/actions';
import { TaskStoreState } from 'src/app/store/model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  title = '';

  constructor(
    private store: Store<TaskStoreState>,
    private taskHttpService: TaskHttpService
  ) {}

  handleSubmit() {
    if (this.title === '') {
      alert('Please enter title of your task');
      return;
    }

    const newTask: Task = {
      _id: uuid(),
      title: this.title,
    };

    this.store.dispatch(setLoading({ loading: true }));
    this.taskHttpService
      .add(newTask)
      .pipe(
        map(task => {
          this.store.dispatch(addTask({ task }));
          this.title = '';
        }),
        catchError(error => of(this.store.dispatch(setError({ error: error.message })))),
        finalize(() => this.store.dispatch(setLoading({ loading: false })))
      )
      .subscribe();
  }
}
