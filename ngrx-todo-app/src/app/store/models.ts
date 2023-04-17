import { Task } from '../models/task';

export interface AppState {
  task: TaskState;
}

export interface TaskState {
  tasks: Task[];
  error: string | null;
  loading: boolean;
}
