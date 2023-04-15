import { ActionReducerMap } from '@ngrx/store';
import { State } from './model';
import { taskReducer } from './reducers';

export const reducers: ActionReducerMap<State> = {
  taskReducer,
};
