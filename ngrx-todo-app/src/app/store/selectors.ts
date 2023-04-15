import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './model';

const getTaskState = createFeatureSelector<TaskState>('taskReducer');

export const getTasks = createSelector(getTaskState, state => state.tasks);
export const getLoading = createSelector(getTaskState, state => state.loading);
export const getError = createSelector(getTaskState, state => state.error);