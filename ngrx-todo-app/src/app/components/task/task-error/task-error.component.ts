import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskStoreState } from 'src/app/store/model';
import { getError } from 'src/app/store/selectors';

@Component({
  selector: 'app-task-clear',
  templateUrl: './task-error.component.html',
})
export class TaskErrorComponent {
  error: string | null = null;

  constructor(private store: Store<TaskStoreState>) {
    this.store.select(getError).subscribe(error => (this.error = error));
  }
}
