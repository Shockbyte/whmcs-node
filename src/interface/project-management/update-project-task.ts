export interface UpdateProjectTaskRequest {
  taskid: number;
  projectid?: number;
  duedate?: string;
  adminid?: number;
  task?: string;
  notes?: string;
  completed?: boolean;
}

export interface UpdateProjectTaskResponse {
  result: string;
  message: string;
}
