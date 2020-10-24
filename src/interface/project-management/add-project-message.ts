export interface AddProjectMessageRequest {
  prodictid: number;
  message: string;
  adminid?: number;
}

export interface AddProjectMessageResponse {
  result: string;
  message: string;
}
