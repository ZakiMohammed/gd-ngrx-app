import { createReducer, on } from '@ngrx/store';
import { TaskState } from './models';
import { initialState } from './initial';
import * as actions from './actions';

export const taskReducer = createReducer<TaskState>(
  initialState,
  on(actions.getAllTask, (state, action): TaskState => {
    return {
      ...state,
      tasks: action.tasks,
    };
  }),
  on(actions.setLoading, (state, action): TaskState => {
    return {
      ...state,
      loading: action.loading,
    };
  }),
  on(actions.setError, (state, action): TaskState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(actions.removeTask, (state, action): TaskState => {
    return {
      ...state,
      tasks: state.tasks.filter(i => i._id !== action.task._id),
    };
  }),
  on(actions.addTask, (state, action): TaskState => {
    return {
      ...state,
      tasks: [...state.tasks, action.task],
    };
  }),
);
