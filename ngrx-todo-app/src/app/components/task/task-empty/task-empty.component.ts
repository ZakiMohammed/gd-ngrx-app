import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/task';
import { AppState } from 'src/app/store/models';
import { getTasks } from 'src/app/store/selectors';

@Component({
  selector: 'app-task-empty',
  templateUrl: './task-empty.component.html',
})
export class TaskEmptyComponent {
  tasks: Task[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select(getTasks).subscribe(tasks => (this.tasks = tasks));
  }
}
