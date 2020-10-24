export interface ListOAuthCredentialsRequest {
  grantType?: string;
  sortField?: string;
  sortOrder?: string;
  limit?: number;
}

export interface ListOAuthCredentialsResponse {
  result: string;
  clients: ClientOAuthCredentials[];
}

export interface ClientOAuthCredentials {
  credentialId: number;
  name: string;
  description: string;
  grantType: string;
  scope: string;
  clientIdentifier: string;
  clientSecret: string;
  uuid: string;
  serviceId: number;
  logoUri: string;
  redirectUri: string[];
  rsaKeyPairId: number;
  createdAt: Date;
  updatedAt: Date;
}
