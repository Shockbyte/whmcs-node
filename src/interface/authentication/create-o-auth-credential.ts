export interface CreateOAuthCredentialRequest {
  grantType: string;
  scope: string;
  name?: string;
  serviceId?: number;
  description?: string;
  logoUri?: string;
  redirectUri?: string;
}

export interface CreateOAuthCredentialResponse {
  result: string;
  credentialId: number;
  clientIdentifier: string;
  clientSecret: string;
}
