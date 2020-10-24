export interface AddBannedIpRequest {
  ip: string;
  reason: string;
  days: number;
  expires?: string;
}

export interface AddBannedIpResponse {
  result: string;
  banid: number;
}
