export interface AddCancelRequestRequest {
  serviceid: number;
  type?: string;
  reason?: string;
}

export interface AddCancelRequestResponse {
  result: string;
  serviceid: number;
  userid: number;
}
