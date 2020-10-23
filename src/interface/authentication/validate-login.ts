export interface ValidateLoginRequest {
  email: string;
  password2: string;
}

export interface ValidateLoginResponse {
  result: string;
  userid: number;
  passwordhash: string;
  twoFactorEnabled: boolean;
}
