export interface ResetPasswordRequest {
  id?: number;
  email?: string;
}

export interface ResetPasswordResponse {
  result: string;
}
