import { Task } from '../models/task';

export interface State {}

export interface TaskState {
  tasks: Task[];
  error: string | null;
  loading: boolean;
}

export interface TaskStoreState {
  taskReducer: TaskState;
}
