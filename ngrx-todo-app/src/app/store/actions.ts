import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task';

export const getAllTask = createAction('[Task] Get All Tasks', props<{ tasks: Task[] }>());
export const setLoading = createAction('[Task] Set Load', props<{ loading: boolean }>());
export const setError = createAction('[Task] Set Error', props<{ error: string }>());
export const removeTask = createAction('[Task] Remove Task', props<{ task: Task }>());
export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());