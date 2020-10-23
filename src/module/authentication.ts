import { Module } from "./module";
import { CreateOAuthCredentialRequest, CreateOAuthCredentialResponse } from "../interface/authentication/create-o-auth-credential";
import { CreateSsoTokenRequest, CreateSsoTokenResponse } from "../interface/authentication/create-sso-token";
import { DeleteOAuthCredentialRequest, DeleteOAuthCredentialResponse } from "../interface/authentication/delete-o-auth-credential";
import { ListOAuthCredentialsRequest, ListOAuthCredentialsResponse } from "../interface/authentication/list-o-auth-credentials";
import { UpdateOAuthCredentialRequest, UpdateOAuthCredentialResponse } from "../interface/authentication/update-o-auth-credential";
import { ValidateLoginRequest, ValidateLoginResponse } from "../interface/authentication/validate-login";

export class WhmcsAuthenticationService extends Module {

  public async createOAuthCredential(options: CreateOAuthCredentialRequest): Promise<CreateOAuthCredentialResponse> {
    return this.request('CreateOAuthCredential', options);
  }

  public async createSsoToken(options: CreateSsoTokenRequest): Promise<CreateSsoTokenResponse> {
    return this.request('CreateSsoToken', options);
  }

  public async deleteOAuthCredential(options: DeleteOAuthCredentialRequest): Promise<DeleteOAuthCredentialResponse> {
    return this.request('DeleteOAuthCredential', options);
  }

  public async listOAuthCredentials(options: ListOAuthCredentialsRequest): Promise<ListOAuthCredentialsResponse> {
    return this.request('ListOAuthCredentials', options);
  }

  public async updateOAuthCredential(options: UpdateOAuthCredentialRequest): Promise<UpdateOAuthCredentialResponse> {
    return this.request('UpdateOAuthCredential', options);
  }

  public async validateLogin(options: ValidateLoginRequest): Promise<ValidateLoginResponse> {
    return this.request('ValidateLogin', options);
  }

}
