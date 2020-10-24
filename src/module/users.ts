import { AddUserRequest, AddUserResponse } from "../interface/users/add-user";
import { CreateClientInviteRequest, CreateClientInviteResponse } from "../interface/users/create-client-invite";
import { DeleteUserClientRequest, DeleteUserClientResponse } from "../interface/users/delete-user-client";
import { GetPermissionsListRequest, GetPermissionsListResponse } from "../interface/users/get-permissions-list";
import { GetUserPermissionsRequest, GetUserPermissionsResponse } from "../interface/users/get-user-permissions";
import { ResetPasswordRequest, ResetPasswordResponse } from "../interface/users/reset-password";
import { UpdateUserRequest, UpdateUserResponse } from "../interface/users/update-user";
import { UpdateUserPermissionsRequest, UpdateUserPermissionsResponse } from "../interface/users/update-user-permissions";
import { BaseModule } from "./base";

export class WhmcsUsersService extends BaseModule {
  
  public async addUser(options: AddUserRequest): Promise<AddUserResponse> {
    return this.request('AddUser', options);
  }
  
  public async createClientInvite(options: CreateClientInviteRequest): Promise<CreateClientInviteResponse> {
    return this.request('CreateClientInvite', options);
  }
  
  public async deleteUserClient(options: DeleteUserClientRequest): Promise<DeleteUserClientResponse> {
    return this.request('DeleteUserClient', options);
  }
  
  public async getPermissionsList(options: GetPermissionsListRequest): Promise<GetPermissionsListResponse> {
    return this.request('GetPermissionsList', options);
  }
  
  public async getUserPermissions(options: GetUserPermissionsRequest): Promise<GetUserPermissionsResponse> {
    return this.request('GetUserPermissions', options);
  }
  
  public async resetPassword(options: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    return this.request('ResetPassword', options);
  }
  
  public async updateUser(options: UpdateUserRequest): Promise<UpdateUserResponse> {
    return this.request('UpdateUser', options);
  }
  
  public async updateUserPermissions(options: UpdateUserPermissionsRequest): Promise<UpdateUserPermissionsResponse> {
    return this.request('UpdateUserPermissions', options);
  }
  
}