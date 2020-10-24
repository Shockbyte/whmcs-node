export interface GetStaffOnlineRequest {

}

export interface GetStaffOnlineResponse {
  result: string;
  totalresults: number;
  staffonline: AdminUser[]
}

export interface AdminUser {
  adminusername: string;
  logintime: string;
  ipaddress: string;
  lastvisit: string;
}
