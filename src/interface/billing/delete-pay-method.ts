export interface DeletePayMethodRequest {
  clientid: number;
  paymethodid: number;
  failonremotefailure?: boolean;
}

export interface DeletePayMethodResponse {
  result: string;
  paymethodid: number;
}
