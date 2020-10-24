export interface UpdateUserPermissionsRequest {
  user_id: number;
  client_id: number;
  permission: string;
}

export interface UpdateUserPermissionsResponse {
  result: string;
}
