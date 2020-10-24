export interface GetAdminDetailsRequest {

}

export interface GetAdminDetailsResponse {
  result: string;
  adminid: number;
  name: string;
  notes: string;
  signature: string;
  allowedpermissions: string;
  departments: string;
  requesttime: string;
  whmcs: { version: string, canonicalversion: string; }
}
