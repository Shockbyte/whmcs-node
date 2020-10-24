export interface GetUserPermissionsRequest {
  user_id: number;
  client_id: number;
}

export interface GetUserPermissionsResponse {
  result: string;
}
