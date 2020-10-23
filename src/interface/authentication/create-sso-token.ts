export interface CreateSsoTokenRequest {
  client_id?: number;
  user_id?: number;
  destination?: string;
  service_id: number;
  domain_id?: number;
  sso_redirect_path?: string;
}

export interface CreateSsoTokenResponse {
  result: string;
  access_token: string;
  redirect_url: string;
}
