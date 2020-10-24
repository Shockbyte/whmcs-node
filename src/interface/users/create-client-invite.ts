export interface CreateClientInviteRequest {
  client_id: string;
  email: number;
  permissions: string;
}

export interface CreateClientInviteResponse {
  result: string;
}
