export interface GetAdminUsersRequest {
  roleid?: number;
  email?: string;
  include_disabled?: boolean;
}

export interface GetAdminUsersResponse {
  result: string;
  count: number;
  admin_users: AdminUser[];
}

export interface AdminUser {
  id: number;
  uuid: string;
  roleId: number;
  username: string;
  twoFactorAuthModule: string;
  firstname: string;
  lastname: string;
  email: string;
  signature: string;
  notes: string;
  template: string;
  language: string;
  isDisabled: number;
  loginAttempts: number;
  supportDepartmentIds: string[];
  receivesTicketNotifications: string[];
  homepageWidgetsConfig: string;
  hiddenHomepageWidgets: string;
  created_at: string;
  updated_at: string;
  fullName: string;
  gravatarHash: string;
}
