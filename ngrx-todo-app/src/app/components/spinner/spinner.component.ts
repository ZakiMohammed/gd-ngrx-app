import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models';
import { getLoading } from 'src/app/store/selectors';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  loading = false;

  constructor(private store: Store<AppState>) {
    this.store.select(getLoading).subscribe(loading => (this.loading = loading));
  }
}
