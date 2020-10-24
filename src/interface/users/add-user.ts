export interface AddUserRequest {
  firstname: string;
  lastname: string;
  email: string;
  password2: string;
  language?: string;
}

export interface AddUserResponse {
  result: string;
  user_id: number;
}
