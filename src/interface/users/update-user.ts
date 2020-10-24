export interface UpdateUserRequest {
  user_id: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  language?: string;
}

export interface UpdateUserResponse {
  result: string;
  user_id: number;
}
