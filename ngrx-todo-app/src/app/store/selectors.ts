import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './models';
import { APP_STATE_TASK } from './constants';

const getTaskState = createFeatureSelector<TaskState>(APP_STATE_TASK);

export const getTasks = createSelector(getTaskState, state => state.tasks);
export const getLoading = createSelector(getTaskState, state => state.loading);
export const getError = createSelector(getTaskState, state => state.error);
