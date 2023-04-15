import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, catchError, of, finalize } from 'rxjs';
import { TaskHttpService } from 'src/app/http/task.http.service';
import { Task } from 'src/app/models/task';
import { removeTask, setError, setLoading } from 'src/app/store/actions';
import { TaskStoreState } from 'src/app/store/model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
  @Input() task!: Task;

  constructor(
    private store: Store<TaskStoreState>,
    private taskHttpService: TaskHttpService
  ) {}

  handleRemoveTask() {
    this.store.dispatch(setLoading({ loading: true }));
    this.taskHttpService
      .remove(this.task._id)
      .pipe(
        map(() => this.store.dispatch(removeTask({ task: this.task }))),
        catchError(error => of(this.store.dispatch(setError({ error: error.message })))),
        finalize(() => this.store.dispatch(setLoading({ loading: false })))
      )
      .subscribe();
  }
}
