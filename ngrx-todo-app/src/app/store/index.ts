import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './models';
import { taskReducer } from './reducers';
import { APP_STATE_TASK } from './constants';

export const reducers: ActionReducerMap<AppState> = {
  [APP_STATE_TASK]: taskReducer,
};
