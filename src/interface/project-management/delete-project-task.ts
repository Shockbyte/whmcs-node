export interface DeleteProjectTaskRequest {
  projectid: number;
  taskid: number;
}

export interface DeleteProjectTaskResponse {
  result: string;
  message: number;
}
