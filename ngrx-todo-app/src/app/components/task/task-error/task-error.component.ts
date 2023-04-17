import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models';
import { getError } from 'src/app/store/selectors';

@Component({
  selector: 'app-task-clear',
  templateUrl: './task-error.component.html',
})
export class TaskErrorComponent {
  error: string | null = null;

  constructor(private store: Store<AppState>) {
    this.store.select(getError).subscribe(error => (this.error = error));
  }
}
