export interface UpdateOAuthCredentialRequest {
  credentialId: number;
  clientApiIdentifier?: string;
  name?: string;
  description?: string;
  grantType?: string;
  scope?: string;
  serviceId?: number;
  logoUri?: string[];
  redirectUrl?: string[];
  resetSecret?: boolean;
}

export interface UpdateOAuthCredentialResponse {
  result: string;
  credentialId: number;
  newClientSecret?: string;
}
