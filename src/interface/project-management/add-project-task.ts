export interface AddProjectTaskRequest {
  projectid: number;
  duedate: string;
  adminid?: number;
  task?: string;
  notes?: string;
  completed?: boolean;
  billed?: boolean;
}

export interface AddProjectTaskResponse {
  result: string;
  message: string;
}
